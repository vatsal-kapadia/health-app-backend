const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { OpenAI } = require('openai');

const app = express();
const port = 5001;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// OpenAI API Setup
const openai = new OpenAI({
    apiKey: 'API-KEY',
});

// Chat Endpoint
app.post('/chat', async (req, res) => {
    const { userInput } = req.body;

    try {
        const response = await openai.chat.completions.create({
            model: 'gpt-3.5-turbo',
            messages: [
                { role: 'system', content: 'You are a helpful health assistant.' },
                { role: 'user', content: userInput },
            ],
        });

        const reply = response.choices[0].message.content;
        res.status(200).json({ reply });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Something went wrong' });
    }
});

// Start the Server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
