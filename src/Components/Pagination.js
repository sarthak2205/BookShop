import React, { useState } from 'react'

export const Pagination = ({ booksPerPage, totalBooks, paginate, currentPage }) => {
  const pageNumber =[];
  const [cur, setCur] = useState(1); 

  for(let i=1; i<=Math.ceil(totalBooks / booksPerPage); i++){
    pageNumber.push(i);
  }

  return (
    <div>
      <nav aria-label="Page navigation example"> 
        <ul className='flex list-style-none'>
          {pageNumber.map(number=>(
            <li key={number} className="page-item">
               <a className={`page-link relative block py-1.5 px-3 rounded--lg border-0 bg-transparent outline-none transition-all duration-300 rounded-sm text-gray-800 hover:text-white hover:bg-indigo-600 focus:shadow-none ${cur === number && 'bg-indigo-600 text-white' }`} href="#" onClick={()=> {paginate(number); setCur(number)}}>
                {number}
              </a>
            </li>
          ))}
          
        </ul>
      </nav>
    </div>
  )
}