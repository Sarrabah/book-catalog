import React from 'react';
import BookItem from './BookItem';

const BookList = () => {
    const books = [
        { id: 1, title: 'book1', author: 'author1', year: 2023, language: 'French', pageNb: 200, type: 'Horror' },
        { id: 2, title: 'book2', author: 'author2', year: 2020, language: 'English', pageNb: 160, type: 'Romance' },
        { id: 3, title: 'book3', author: 'author3', year: 2019, language: 'Frensh', pageNb: 475, type: 'Fantasy' },
        { id: 4, title: 'book4', author: 'author4', year: 2015, language: 'Arabic', pageNb: 311, type: 'Autobiography' }
    ];
    return (
        <div className="max-w-2xl mx-auto p-4 ">
            <h2 className="text-center text-2xl font-bold mb-4">Book List</h2>
            <ul className="list-none p-0 flex flex-col space-y-4">
                {books.map((bookI) => (
                    <BookItem key={bookI.id} book={bookI} />
                ))}
            </ul>
        </div>
    );
};
export default BookList;
