require('dotenv').config();
const axios = require('axios');

const HUGGINGFACE_API_URL = 'https://api-inference.huggingface.co/models/facebook/blenderbot-400M-distill'; // Change model if needed
const API_KEY = process.env.HUGGINGFACE_API_KEY;

async function generateResponse(prompt) {
  console.log('Prompt received:', prompt);

  try {
    const response = await axios.post(
      HUGGINGFACE_API_URL,
      { inputs: prompt },
      { headers: { Authorization: `Bearer ${API_KEY}` } }
    );

    console.log('Response from Hugging Face:', response.data.generated_text);
    return response.data[0].generated_text.trim();
  
  } catch (error) {
    console.error('Error in Hugging Face service:', error.message);
    throw error;
  }
}

module.exports = { generateResponse };
