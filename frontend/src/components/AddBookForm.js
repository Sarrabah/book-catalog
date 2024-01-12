import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const AddBookForm = () => {
    const location = useLocation();
    const stateLoc = location.state;
    const [formData, setFormData] = useState({
        id: '',
        title: '',
        author: '',
        year: '',
        page: '',
        language: '',
        type: ''
    });

    const [isEdit, setIsEdit] = useState(stateLoc != null);

    useEffect(() => {
        if (isEdit) {
            setFormData({
                id: stateLoc.id,
                title: stateLoc.title,
                author: stateLoc.author,
                year: stateLoc.year,
                page: stateLoc.page,
                language: stateLoc.language,
                type: stateLoc.type

            })
        };
    }, []);

    const handleSubmit = (e) => {
        const { title, author, year, page, language, type } = formData;
        e.preventDefault();
        if (!title || !author || !year || !page || !language || !type) {
            alert('Please fill in all fields!');
            return;
        }
        if (year <= 0 || page <= 0) {
            alert('Year or pages cannot be negatif or zero !!');
            return;
        }
    };
    const handleAdd = async () => {
        await fetch('http://localhost:3001/api/book', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                title: formData.title,
                author: formData.author,
                year: formData.year,
                page: formData.page,
                language: formData.language,
                type: formData.type,
            }),
        });
        window.alert('Ajout valider!');
        window.location.href = '/';
    }
    const handleEdit = async () => {
        await fetch('http://localhost:3001/api/book', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: formData.id,
                title: formData.title,
                author: formData.author,
                year: formData.year,
                page: formData.page,
                language: formData.language,
                type: formData.type,
            }),

        });
        window.alert('Changement valider!');
        window.location.href = '/';
    }

    return (
        <div>
            <Link to={'/'} className="flex mt-2 ml-6 underline decoration-indigo-500" >Retour à la page d'accueil </Link>
            <div className="flex items-center justify-center h-screen">
                <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md w-96">
                    <h2 className="text-xl text-indigo-600 font-bold mb-4 text-center">Book informations </h2>
                    <label htmlFor="title" className="block mb-2">
                        Title:
                        <input type="text"
                            id="title"
                            value={formData.title}
                            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                            className="border border-gray-300 p-2 rounded w-full"
                        />
                    </label>

                    <label htmlFor="author" className="block mb-2">
                        Author:
                        <input type="text"
                            id="author"
                            value={formData.author}
                            onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                            className="border border-gray-300 p-2 rounded w-full"
                        />
                    </label>

                    <label htmlFor="year" className="block mb-2">
                        Year:
                        <input type="number"
                            id="year"
                            value={formData.year}
                            onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                            className="border border-gray-300 p-2 rounded w-full"
                        />
                    </label>

                    <label htmlFor="page" className="block mb-2">
                        Pages:
                        <input type="number"
                            id="page"
                            value={formData.page}
                            onChange={(e) => setFormData({ ...formData, page: e.target.value })}
                            className="border border-gray-300 p-2 rounded w-full"
                        />
                    </label>

                    <label htmlFor="language" className="block mb-2">
                        Language:
                        <input type="text"
                            id="lang"
                            value={formData.language}
                            onChange={(e) => setFormData({ ...formData, language: e.target.value })}
                            className="border border-gray-300 p-2 rounded w-full"
                        />
                    </label>

                    <label htmlFor="type" className="block mb-2">
                        Type:
                        <input type="text"
                            id="type"
                            value={formData.type}
                            onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                            className="border border-gray-300 p-2 rounded w-full"
                        />
                    </label>
                    <div className="flex space-x-20">
                        {!isEdit && <button onClick={handleAdd} type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
                            Add a new Book
                        </button>}
                        {isEdit && <button onClick={handleEdit} type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
                            Validate the edit
                        </button>}
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddBookForm;