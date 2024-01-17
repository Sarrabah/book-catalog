let model = require('../models/bookModel');

describe('test', () => {
    test('get all books', () => {
        const allBooks = model.book.getAllBooks();
        expect(allBooks).toEqual(model.books);
    });
    test('delete book', () => {
        const idToDelete = 2;
        const beforeDeleteLength = model.book.getAllBooks().length;
        const updatedBooks = model.book.deleteB(idToDelete);
        const deletedBook = model.books.find((book) => book.id === idToDelete);
        expect(updatedBooks).toHaveLength(beforeDeleteLength - 1);
        expect(updatedBooks).not.toContainEqual(deletedBook);

    });
    test('post new book', () => {
        const newBook = { title: 'book5', id: 4, author: 'author5', year: 2022, language: 'Arabic', page: 485, type: 'Autobiography' };

        const beforePostLength = model.book.getAllBooks().length;

        let result = model.book.postBook(newBook);

        expect(result.length).toEqual(beforePostLength + 1);
        expect(result).toContainEqual(newBook);
    })
    test('update a book', () => {
        const updateId = 1;
        const updatedBook = { id: updateId, title: 'booktestedit', author: 'author3', year: 2019, language: 'Frensh', page: 475, type: 'Fantasy' };
        const beforeEditLength = model.book.getAllBooks().length;
        let resultD = model.book.editB(updatedBook, updateId);
        let oldBook = model.books.find((book) => book.id === updateId);
        expect(resultD).toHaveLength(beforeEditLength);
        expect(resultD).not.toContainEqual(oldBook);
        expect(resultD).toContainEqual(updatedBook);
    });
})


