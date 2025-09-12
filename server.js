require('dotenv').config();
const express = require('express');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

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
