require('dotenv').config();
const express = require('express');
const axios = require('axios');
const fs = require('fs');
const path = require('path');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(__dirname));

function loadProducts() {
    const data = fs.readFileSync(path.join(__dirname, 'products.json'), 'utf8');
    return JSON.parse(data);
}

app.get('/api/products', (req, res) => {
    res.json(loadProducts());
});

// Erzeugt eine Stripe Checkout Session. Preise werden serverseitig aus
// products.json berechnet, damit Clients keine Preise manipulieren können.
app.post('/api/create-checkout-session', async (req, res) => {
    try {
        const products = loadProducts();
        const items = Array.isArray(req.body.items) ? req.body.items : [];

        if (items.length === 0) {
            return res.status(400).json({ error: 'Warenkorb ist leer.' });
        }

        const line_items = items.map((item) => {
            const product = products.find((p) => p.id === item.id);
            const quantity = Math.floor(Number(item.quantity));
            if (!product || !Number.isInteger(quantity) || quantity < 1 || quantity > 20) {
                throw new Error('Ungültiger Warenkorb-Eintrag.');
            }
            return {
                price_data: {
                    currency: 'chf',
                    product_data: { name: product.name },
                    unit_amount: Math.round(product.priceChf * 100),
                },
                quantity,
            };
        });

        const origin = req.headers.origin || `${req.protocol}://${req.get('host')}`;

        const session = await stripe.checkout.sessions.create({
            mode: 'payment',
            line_items,
            shipping_address_collection: { allowed_countries: ['CH', 'DE', 'AT', 'LI'] },
            success_url: `${origin}/shop-success.html?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${origin}/shop-cancel.html`,
        });

        res.json({ url: session.url });
    } catch (error) {
        console.error(error);
        res.status(400).json({ error: 'Checkout konnte nicht erstellt werden.' });
    }
});

// Speichert den Konversationsverlauf für jede Sitzung
const sessions = {};

app.post('/api/chat', async (req, res) => {
    const userMessage = req.body.message;
    const sessionId = req.body.sessionId; // Session ID, um die Konversation zu verfolgen

    // Initialisiere die Sitzung, wenn sie noch nicht existiert
    if (!sessions[sessionId]) {
        sessions[sessionId] = {
            messages: [
                { role: "system", content: "Ich bin Patrick, ein Solar- und Energie-Experte, und ich möchte dir helfen, die beste Solar-Lösung für dein Zuhause oder Unternehmen zu finden. Wenn du Interesse an einer Solar-Anlage hast, melde dich gerne bei mir. Gemeinsam können wir herausfinden, welche Lösung am besten zu deinen Bedürfnissen passt. Ruf mich an unter: 078 662 59 21 oder kontaktiere mich via email patrick@biber.solar. Alle Fragen werden nur im Bezug auf Solar, Energie oder Dekarbonisierung beantwortet." }
            ],
            count: 0
        };
    }

    // Zähler für Interaktionen
    if (sessions[sessionId].count >= 2) {
        return res.json({ message: "Kontaktiere mich gerne telefonisch auf 078 662 52, Whatsapp oder Email, wenn du weitere Fragen hast!" });
    }

    // Füge die Benutzer-Nachricht zum Verlauf hinzu
    sessions[sessionId].messages.push({ role: "user", content: userMessage });

    try {
        const response = await axios.post(
            'https://api.openai.com/v1/chat/completions',
            {
                model: "gpt-3.5-turbo",
                messages: sessions[sessionId].messages, // Gebe den gesamten Verlauf weiter
                max_tokens: 800
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
                }
            }
        );

        // Füge die Antwort des Bots zum Verlauf hinzu
        const botMessage = response.data.choices[0].message.content;
        sessions[sessionId].messages.push({ role: "assistant", content: botMessage });

        // Erhöhe den Interaktionszähler
        sessions[sessionId].count++;

        // Antwort an das Frontend zurückgeben
        res.json({ message: botMessage });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Fehler bei der Anfrage an die API' });
    }
});

app.listen(PORT, () => {
    console.log(`Server läuft auf http://localhost:${PORT}`);
});
