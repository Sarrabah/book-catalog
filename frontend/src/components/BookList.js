import React from 'react';

const BookList = () => {
    const books = [
        { id: 1, title: 'book1', author: 'author1', year: 2023, language: 'fr', pageNb: 200 },
        { id: 2, title: 'book2', author: 'author2', year: 2020, language: 'ang', pageNb: 160 },
        { id: 3, title: 'book3', author: 'author3', year: 2019, language: 'fr', pageNb: 475 },
        { id: 4, title: 'book4', author: 'author4', year: 2015, language: 'ar', pageNb: 311 }
    ];
    return (
        <div className="max-w-2xl mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4">Book List</h2>
            <ul className="list-none p-0">
                {books.map((book) => (
                    <li key={book.id}
                    className="mb-2 border border-gray-300 p-2 rounded">
                        <strong className="text-blue-700">{book.title}</strong> ({book.language})  by {book.author} edit in {book.year}.
                        It contain {book.pageNb} pages.
                    </li>
                ))}
            </ul>
        </div>
    );
};
export default BookList;
