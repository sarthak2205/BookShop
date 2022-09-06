import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

function View() {
    const [book, setBook] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:3003/books/${id}`).then((res) => {
            setBook(res.data);
        })
    }, []);
    
    const{id} = useParams();

  return (
    <div className='w-full h-full flex flex-col justify-center items-center py-5'>
        <Link to="/" className='text-black font-semibold font-Inter text-2xl text-center mt-8 '><p className='text-black font-bold'>Back to Home</p></Link>
        {book && (
            <>
            <div className='w-full h-[500px] flex justify-center item-center align-center px-6 py-4'>
                <div className='flex flex-col space-y-4'>
                    <img src={"{book.cover}"} className="flex justify-center items-center"/>
                    <h2 className='text-black font-semibold underline font-Inter text-3xl text-center'>{book.title} </h2>
                    <h2 className='text-black font-semibold font-Inter text-2xl text-center'><p className='text-black font-bold'>Author:</p>{book.author} </h2>
                    <h2 className='text-black font-semibold font-Inter text-2xl text-center'><p className='text-black font-bold'>Year : </p>{book.year}</h2>
                    <h2 className='text-black font-semibold font-Inter text-2xl text-center'><p className='text-black font-bold'>Edition :</p> {book.edition}</h2>
                    <h2 className='text-black font-semibold font-Inter text-2xl text-center'><p className='text-black font-bold'>Categories : </p>{book.categories}</h2>
                    <h2 className='text-black font-semibold font-Inter text-2xl text-center'><p className='text-black font-bold'>Pages : </p> {book.pages}</h2>
                    <h2 className='text-black font-semibold font-Inter text-2xl text-center'><p className='text-black font-bold'>Description :</p> {book.description}</h2>
                </div>
            </div>
            </>
        )}
    </div>
  )
}

export default View