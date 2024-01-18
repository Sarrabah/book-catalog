let books = [
    { id: 0, title: 'book1', author: 'author1', year: 2023, language: 'French', page: 200, type: 'Horror' },
    { id: 1, title: 'book2', author: 'author2', year: 2020, language: 'English', page: 160, type: 'Romance' },
    { id: 2, title: 'book3', author: 'author3', year: 2019, language: 'Frensh', page: 475, type: 'Fantasy' },
    { id: 3, title: 'book4', author: 'author4', year: 2015, language: 'Arabic', page: 311, type: 'Autobiography' }
];
const book = {
    getAllBooks: (res) => {
        try {
            return books;
        } catch (error) {
            res.json({ error: error })
        }
    },
    postBook: (book, res) => {
        try {
            if (!book.title || !book.author || !book.language || !book.type || !book.year || !book.page) {
                throw new Error("please fill all the details");
            }
            let newId = books[(books.length) - 1].id + 1;
            let newBook = { id: newId, ...book };
            books.push(newBook);
            return books;
        } catch (error) {
            console.error('There is an error when you post a new book', error);
            res.json({ error: error.message });
        }

    },
    deleteB: (id, res) => {
        try {
            let existEle = books.filter((element) => element.id == id);
            if (existEle.length == 0) {
                throw new Error("the id doesn't exist ");
            }
            books = books.filter((element) => element.id != id);
            return books;
        } catch (error) {
            res.json({ error: error.message });
        }
    },
    editB: (book, id, res) => {
        try {
            let exist = false;
            for (let i = 0; i < books.length; i++) {
                if (books[i].id == id) {
                    books[i] = book;
                    exist = true;
                }
            }
            if (exist == false) {
                throw new Error("No book to edit");
            }
            else {
                return books;
            }
        } catch (error) {
            res.json({ error: error.message });
        }
    }
};
module.exports = { book, books };