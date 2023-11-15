import React from 'react';

const BookItem = ({ book }) => {

    return (
        <li className=" border-4 border-indigo-600 pl-2 rounded-md">
            <h1> <strong className="text-left text-blue-500">{book.title}</strong></h1><br></br>
            <h3 className='italic'> by {book.author} </h3><br></br>
            <div className='grid grid-cols-2'>
                <h4> <div className="underline text-green-700">Year:  </div>{book.year}</h4>
                <h4> <div className="underline text-green-700">Pages: </div> {book.pageNb}</h4>
                <h4> <div className='underline text-green-700'>Language:   </div>{book.language}</h4>
                <h4> <div className='underline text-green-700'>Type:   </div>{book.type}</h4>

            </div>
        </li>
    )
}
export default BookItem;