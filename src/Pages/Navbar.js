import React from 'react';
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';

export default function Navbar() {
  return (
    <div className='w-full h-16 bg-blue-600 '>
          <Link to="/" >
            <h1 className='text-white text-3xl font-semibold flex justify-center'>Book Shop</h1>
          </Link>
          <div className='flex flex-row-reverse px-10 -mt-5'><Link to="add-books" className='w-48 bg-white text-black flex justify-center items-center font-semibold text-xl rounded-xl '>Add a book</Link></div>
      
    </div>
  )
}
