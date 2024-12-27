const express = require('express');
const router = express.Router();
const { generateResponse } = require('../services/huggingFaceServices');

router.post('/', async (req, res) => {
  try {
    const userMessage = req.body.message;
    console.log('User message received:', userMessage);

    const aiResponse = await generateResponse(userMessage);
    console.log('AI response:', aiResponse);

    res.json({ reply: aiResponse });
  } catch (error) {
    console.error('Error in /chat route:', error.message);
    res.status(500).json({ error: 'Error generating response' });
  }
});

module.exports = router;
