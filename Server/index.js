const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { Configuration, OpenAIApi } = require('openai');

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// OpenAI API Setup
const configuration = new Configuration({
    apiKey: 'your-openai-api-key',
});
const openai = new OpenAIApi(configuration);

// Chat Endpoint
app.post('/chat', async (req, res) => {
    const { userInput } = req.body;

    try {
        const response = await openai.createChatCompletion({
            model: 'gpt-4',
            messages: [
                { role: 'system', content: 'You are a helpful health assistant.' },
                { role: 'user', content: userInput },
            ],
        });

        const reply = response.data.choices[0].message.content;
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
