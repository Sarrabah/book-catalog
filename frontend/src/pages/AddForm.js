import React, { useState, useEffect } from "react";
import AddBookForm from "../components/AddBookForm";

const AddForm = () => {
    const [books, setBooks] = useState([
        { id: 1, title: 'book1', author: 'author1', year: 2023, language: 'French', pageNb: 200, type: 'Horror' },
        { id: 2, title: 'book2', author: 'author2', year: 2020, language: 'English', pageNb: 160, type: 'Romance' },
        { id: 3, title: 'book3', author: 'author3', year: 2019, language: 'Frensh', pageNb: 475, type: 'Fantasy' },
        { id: 4, title: 'book4', author: 'author4', year: 2015, language: 'Arabic', pageNb: 311, type: 'Autobiography' }
    ]);

    const handleAddBook = (newBook) => {
        setBooks([...books, { id: books.length + 1, ...newBook }]);
    };
    
    useEffect(() => {
        console.log(books);
      }, [books]);

    return (
        <div>
            <AddBookForm onAddBook={handleAddBook} />
        </div>
    )
}

export default AddForm;