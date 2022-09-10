import React from 'react';
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';

export default function Navbar() {
  return (
    <div className='w-full h-16 bg-blue-600'>
      <div className=' flex flex-row justify-around py-2 mx-auto'>
        <div className='py-1'>
            <Link to="/" >
              <h1 className='text-white text-2xl font-semibold pl-10 px-3'>Book Shop</h1>
            </Link>
        </div>

          <div className='py-2'><Link to="add-books" className='w-40 bg-white text-black flex justify-center items-center font-semibold text-xl rounded-xl hover:scale-110 transition duration-300 ease-in-out'>Add a book</Link></div>
          
      </div>
    </div>
  )
}
