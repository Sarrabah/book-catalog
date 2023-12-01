import React from 'react';
import { useNavigate } from 'react-router-dom';

const BookItem = ({ book }) => {
    const navigate = useNavigate();
    const handleEdit = () => {
        navigate('/form', { state: book });
    };

    return (
        <li className=" border-4 border-indigo-600 pl-2 rounded-md pb-4">
            <h1> <strong className="text-left text-blue-500">{book.title}</strong></h1><br></br>
            <h3 className='italic'> by {book.author} </h3><br></br>
            <div className='grid grid-cols-2'>
                <h4> <div className="underline text-green-700">Year:  </div>{book.year}</h4>
                <h4> <div className="underline text-green-700">Pages: </div> {book.pages}</h4>
                <h4> <div className='underline text-green-700'>Language:   </div>{book.language}</h4>
                <h4> <div className='underline text-green-700'>Type:   </div>{book.type}</h4>
            </div>
            <br></br>
            <button onClick={handleEdit} className=" text-black py-2 px-4 rounded border-2 border-black"> Edit the book </button>
           
        </li>
    )
}
export default BookItem;