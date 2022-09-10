import React from 'react';
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';

export default function Navbar() {
  return (
    <div className='w-full h-16 bg-blue-600'>
      <div className=' flex flex-row justify-around py-2 mx-auto'>
        <div className='py-1'>
            <Link to="/" >
              <div className='text-white text-2xl font-semibold pl-10 px-3 md:text-3xl'>
                <h1>Book Shop</h1>
              </div>
            </Link>
        </div>

          <div className='py-2'>
            <div className='w-40 bg-white text-black flex justify-center items-center font-semibold text-xl rounded-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-blue-100 duration-300 md:w-50 md:text-2xl'>
            <Link to="add-books" className=''>Add a book</Link>
            </div>
          </div>
          
      </div>
    </div>
  )
}
