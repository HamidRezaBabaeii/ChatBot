const express = require('express');
const bodyParser = require('body-parser');
const chatRoutes = require('./src/routers/chat');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(express.static('public'));

// Routes
app.use('/chat', chatRoutes);

module.exports = app;
