import React, { useState } from 'react';
import BookItem from './BookItem';
import { useNavigate } from 'react-router-dom';


const BookList = () => {
    const [books, setBooks] = useState([
        { id: 1, title: 'book1', author: 'author1', year: 2023, language: 'French', page: 200, type: 'Horror' },
        { id: 2, title: 'book2', author: 'author2', year: 2020, language: 'English', page: 160, type: 'Romance' },
        { id: 3, title: 'book3', author: 'author3', year: 2019, language: 'Frensh', page: 475, type: 'Fantasy' },
        { id: 4, title: 'book4', author: 'author4', year: 2015, language: 'Arabic', page: 311, type: 'Autobiography' }
    ]);
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/form');
    };
    return (
        <div className="max-w-2xl mx-auto p-4">
            <h2 className="text-center text-2xl font-bold mb-4">Book List</h2>
            <div className="flex justify-end mb-4">
                <button onClick={handleClick}> add book </button>
            </div>
            <ul className="list-none p-0 flex flex-col space-y-4">
                {books.map((bookI) => (
                    <BookItem key={bookI.id} book={bookI} />
                ))}
            </ul>
        </div>

    );
};
export default BookList;
