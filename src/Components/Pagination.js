import React from 'react'

export const Pagination = ({ booksPerPage, totalBooks, paginate, currentPage, setCurrentPage }) => {
  const pageNumber =[];

  for(let i=1; i<=Math.ceil(totalBooks / booksPerPage); i++){
    pageNumber.push(i);
  }

  const Next=()=>{
    setCurrentPage(pageNumber+1);
    console.log(setCurrentPage);
  }

  return (
    <div>
      <nav aria-label="Page navigation example"> 
        <ul className='flex list-style-none'>
        <li className="page-item disabled"><a className="page-link relative block py-1.5 px-3 rounded--lg border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-500 pointer-events-none focus:shadow-none" href="#" tabIndex="-1" aria-disabled="true">Previous</a></li>
          {pageNumber.map(number=>(
            <li key={number} className="page-item">
               <a className="page-link relative block py-1.5 px-3 rounded--lg border-0 bg-transparent outline-none transition-all duration-300 rounded-sm text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none" href="#" onClick={()=> paginate(number)}>
                {number}
              </a>
            </li>
          ))}
          <li className="page-item"><a className="page-link relative block py-1.5 px-3 rounded--lg border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none" href="#" onClick={() => Next}>Next</a></li>
        </ul>
      </nav>
    </div>
  )
}