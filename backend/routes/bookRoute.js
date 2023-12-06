const express = require('express');
const bookController = require('../controllers/bookController');
const route = express.Router();

route.get('/books', bookController.allBooks);
route.post('/addbook',bookController.postNewBook);

module.exports =route ;