// server/routes/chat.js

const express = require('express');
const axios = require('axios');
require('dotenv').config();
// console.log(`'Bearer ${process.env.OPENAI_API_KEY}`);
const router = express.Router();

router.post('/chat', async (req, res) => {
  const { message } = req.body;

  try {
    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: message }],
      },
      {
        headers: {
          'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );

    res.json({ reply: response.data.choices[0].message.content });
  } catch (err) {
    console.error(err.response ? err.response.data : err.message);
    res.status(500).json({ error: 'Failed to fetch response from ChatGPT' });
  }
});

module.exports = router;
