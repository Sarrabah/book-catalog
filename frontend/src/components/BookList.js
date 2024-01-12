import React, { useEffect, useState } from 'react';
import BookItem from './BookItem';
import { useNavigate } from 'react-router-dom';


const BookList = () => {
    const [books, setBooks] = useState([]);
    const getbooks = async () => {
        let response = await fetch('http://localhost:3001/api/books');
        let data = await response.json();
        let books = setBooks(data);
        return books;
    }
    useEffect(() => {
        getbooks();
    }, []);
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/form');
    };
    const deleteBook = async (id) => {
        let response1 = await fetch(`http://localhost:3001/api/book/?id=${id}`, {
            method: "delete",
        });
        let data1 = await response1.json();
        console.log(data1);
        setBooks(data1);
    }

    return (
        <div className="max-w-2xl mx-auto p-4">
            <h2 className="text-center text-2xl font-bold mb-4">Book List</h2>
            <div className="flex justify-end mb-4">
                <button onClick={handleClick} className=" text-black py-2 px-4 rounded border-2 border-bleu"> Add a new Book </button>
            </div>
            <ul className="list-none p-0 flex flex-col space-y-4">
                {books.map((bookI) => (
                    <BookItem key={bookI.id} book={bookI} deleteBook={deleteBook} />
                ))}
            </ul>
        </div>

    );
};
export default BookList;
