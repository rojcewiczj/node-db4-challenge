const express = require('express');
const helmet = require('helmet');
const recipeRouter = require('./recipes/recipe-router.js');
const db = require('./data/db-config.js');

const server = express();

server.use(helmet());
server.use(express.json());

server.use('/api/recipes', recipeRouter);

module.exports = server;