const books = require('../models/bookModel');

const bookController = {
    allBooks : (req,res) => {
        try {
            const findBooks = books.getAllBooks();
            res.json(findBooks);
        } catch (error) {
            res.status(500);
            res.json({error: 'internal error server'});
        }
    },
    postNewBook : (req,res) => {
        try {
            let data = req.body;
            let newList = books.postBook(data);
            res.json(newList);
        } catch (error) {
            res.status(500);
            res.json({error: 'internal error'});
        }
    } 
};
module.exports = bookController;