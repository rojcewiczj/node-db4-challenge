const express = require('express');
const helmet = require('helmet');

const db = require('./data/db-config.js');

const server = express();

server.use(helmet());
server.use(express.json());

server.get('/api/recipes', (req, res) => {
  // get all recipes from the database
  db('recipes')
    .then(recipes => {
      res.status(200).json(recipes);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

server.get('/api/ingrediants', (req, res) => {
  // get all ingrediants from the database
  // include ingrediants name
  db('recipes')
    .leftJoin('recipes', 'recipes.id', 'ingrediants.recipe_id')
    // .select('ingrediants.id', 'ingrediants.ingrediantes_name', 's.species_name')
    .then(ingrediants => {
      res.status(200).json(ingrediants);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

// create ingrediant
server.post('/api/ingrediants', (req, res) => {
  db('ingrediants')
    .insert(req.body, 'id')
    .then(ids => {
      const id = ids[0];

      db('ingrediants')
        .where({ id })
        .first()
        .then(ingrediant => {
          res.status(201).json(ingrediant);
        });
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

// remove recipe
server.delete('/api/recipes/:id', (req, res) => {
  db('recipes')
    .where({ id: req.params.id })
    .del()
    .then(count => {
      if (count > 0) {
        res.status(204).end();
      } else {
        res.status(404).json({ message: 'Record not found' });
      }
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

module.exports = server;