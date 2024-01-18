let bookModel = require('../models/bookModel');

const bookController = {
    allBooks: (req, res) => {
        try {
            const findBooks = bookModel.book.getAllBooks(res);
            res.json(findBooks);
        } catch (error) {
            res.status(500);
            res.json({ error: 'internal error server to get all books' });
        }
    },
    postNewBook: (req, res) => {
        try {
            let data = req.body;
            if (JSON.stringify(data) === '{}') {
                console.log("errortest")
                throw new Error("Missing the book details in the request");
            }
            let newList = bookModel.book.postBook(data, res);
            res.json(newList);
        } catch (error) {
            res.status(500);
            res.json({ error: error.message });
        }
    },
    deleteBook: (req, res) => {
        try {
            let id = req.query.id;
            console.log(id)
            if (!id) {
                console.log("testdelate id");
                throw new Error("Missing book ID in parameters");
            }
            let bookList = bookModel.book.deleteB(id, res);
            res.status(200);
            res.json(bookList);
        } catch (error) {
            res.status(500);
            res.json({ error: error.message })
        }
    },
    editBook: (req, res) => {
        try {
            const book = req.body;
            if (JSON.stringify(book) === '{}') {
                throw new Error("Missing the book details in the body");
            }
            const id = req.body.id;
            if (!id) {
                throw new Error("Missing the book id in book details in the body");
            }

            const bookEdited = bookModel.book.editB(book, id, res);
            res.status(200);
            res.json(bookEdited);
        } catch (error) {
            res.status(500);
            res.json({ error: error.message })
        }
    }
};
module.exports = bookController;