import React, { useState } from "react";

const AddBookForm = ({ onAddBook }) => {
    const [formData , setFormData] = useState({
        title:'',
        author:'',
        year:'',
        page:'',
        language:'',
        type:''
    });
    const {title, author, year, page, language, type} = formData;
    const handleSubmit = (e) => {
        e.preventDefault();

        if (!title || !author || !year || !page || !language || !type) {
            alert('Please fill in all fields!');
            return;
        }
        if (year <= 0 || page <= 0) {
            alert('Year or pages cannot be negatif or zero !!');
            return;
        }

        const newBook = {
            title,
            author,
            year: parseInt(year),
            page: parseInt(page),
            language,
            type
        };
        onAddBook(newBook);
        setFormData({
            title:'',
            author:'',
            year:'',
            page:'',
            language:'',
            type:''
        })
    };

    return (
        <div className="flex items-center justify-center h-screen">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md w-96">
                <h2 className="text-xl text-indigo-600 font-bold mb-4 text-center">Add New Book</h2>
                <label htmlFor="title" className="block mb-2">
                    Title:
                    <input type="text"
                        id="title"
                        value={formData.title}
                        onChange={(e) => setFormData({...formData, title: e.target.value})}
                        className="border border-gray-300 p-2 rounded w-full"
                    />
                </label>

                <label htmlFor="author" className="block mb-2">
                    Author:
                    <input type="text"
                        id="author"
                        value={formData.author}
                        onChange={(e) => setFormData({...formData, author: e.target.value})}
                        className="border border-gray-300 p-2 rounded w-full"
                    />
                </label>

                <label htmlFor="year" className="block mb-2">
                    Year:
                    <input type="number"
                        id="year"
                        value={formData.year}
                        onChange={(e) => setFormData({...formData, year: e.target.value})}
                        className="border border-gray-300 p-2 rounded w-full"
                    />
                </label>

                <label htmlFor="page" className="block mb-2">
                    Pages:
                    <input type="number"
                        id="page"
                        value={formData.page}
                        onChange={(e) => setFormData({...formData, page: e.target.value})}
                        className="border border-gray-300 p-2 rounded w-full"
                    />
                </label>

                <label htmlFor="language" className="block mb-2">
                    Language:
                    <input type="text"
                        id="lang"
                        value={formData.language}
                        onChange={(e) => setFormData({...formData, language: e.target.value})}
                        className="border border-gray-300 p-2 rounded w-full"
                    />
                </label>

                <label htmlFor="type" className="block mb-2">
                    Type:
                    <input type="text"
                        id="type"
                        value={formData.type}
                        onChange={(e) => setFormData({...formData, type: e.target.value})}
                        className="border border-gray-300 p-2 rounded w-full"
                    />
                </label>
                <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
                    Add Book
                </button>
            </form>
        </div>
    );
};

export default AddBookForm;