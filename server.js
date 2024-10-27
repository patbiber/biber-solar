require('dotenv').config();
const express = require('express');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// API-Schlüssel wird sicher im Backend verwendet und in der .env-Datei gespeichert
app.post('/api/chat', async (req, res) => {
    const userMessage = req.body.message;

    try {
        const response = await axios.post(
            'https://api.openai.com/v1/chat/completions',
            {
                model: "gpt-3.5-turbo",
                messages: [
                    { role: "system", content: "Ich bin ein Solar- und Energie-Experte..." },
                    { role: "user", content: userMessage }
                ],
                max_tokens: 800
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
                }
            }
        );

        // Antwort an das Frontend zurückgeben
        res.json({ message: response.data.choices[0].message.content });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Fehler bei der Anfrage an die API' });
    }
});

app.listen(PORT, () => {
    console.log(`Server läuft auf http://localhost:${PORT}`);
});
