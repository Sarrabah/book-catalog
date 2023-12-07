const books = require('../models/bookModel');

const bookController = {
    allBooks: (req, res) => {
        try {
            const findBooks = books.getAllBooks();
            res.json(findBooks);
        } catch (error) {
            res.status(500);
            res.json({ error: 'internal error server' });
        }
    },
    postNewBook: (req, res) => {
        try {
            let data = req.body;
            let newList = books.postBook(data);
            res.json(newList);
        } catch (error) {
            res.status(500);
            res.json({ error: 'internal error' });
        }
    },
    deleteBook: (req, res) => {
        try {
            let id = req.query.id;
            if (!id) {
                res.status(400).json({ error: 'Missing book ID in parameters.' });
                return;
            }
            let bookList = books.deleteB(id);
            res.status(200);
            res.json(bookList);
        } catch (error) {
            res.status(404).json({ message: "Not found" })
        }


    }
};
module.exports = bookController;