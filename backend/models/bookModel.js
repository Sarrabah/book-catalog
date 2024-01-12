let books = [
    { id: 1, title: 'book1', author: 'author1', year: 2023, language: 'French', page: 200, type: 'Horror' },
    { id: 2, title: 'book2', author: 'author2', year: 2020, language: 'English', page: 160, type: 'Romance' },
    { id: 3, title: 'book3', author: 'author3', year: 2019, language: 'Frensh', page: 475, type: 'Fantasy' },
    { id: 4, title: 'book4', author: 'author4', year: 2015, language: 'Arabic', page: 311, type: 'Autobiography' }
];
const book = {
    getAllBooks: () => {
        try {
            return books;
        } catch (error) {
            console.error('Error getting all the books:', error);
            throw error;
        }
    },
    postBook: (data) => {
        books.push(data);
        return books;
    },
    deleteB: (id) => {
        books = books.filter((element) => element.id != id);
        return books;
    },
    editB: (book, id) => {
            let exist =false ;
            for (let i = 0; i < books.length; i++) { 
                if (books[i].id == id) {
                    books[i] = book;
                    exist = true;
                }
            }
            if (exist == false){
                console.error('Error getting all the books:', error);
            }
            else{
                return books;
            }              
    }
};
module.exports = book;