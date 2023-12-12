const express = require('express');
const bookController = require('../controllers/bookController');
const route = express.Router();

route.get('/books', bookController.allBooks);
route.post('/book', bookController.postNewBook);
route.delete('/book/', bookController.deleteBook);
route.put('/book', bookController.editBook);

module.exports = route;