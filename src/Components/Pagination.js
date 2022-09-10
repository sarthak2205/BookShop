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
               <a className={`page-link relative block py-1.5 px-3 rounded--lg border-0 bg-transparent outline-none transition-all duration-300 rounded-sm  hover:text-white hover:bg-indigo-600 active:text-white focus:outline-none focus:ring focus:ring-violet-300 focus:text-white ${cur === number && 'text-white bg-indigo-600 '}`} href="#" onClick={()=>{paginate(number); setCur(number)}}> 
                {number}
              </a>
            </li>
          ))}
          
        </ul>
      </nav>
    </div>
  )
}