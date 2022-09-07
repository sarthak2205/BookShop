import React, {useEffect, useState} from 'react';
import axios from "axios";
import { Pagination } from '../Components/Pagination';
import { Link } from 'react-router-dom';

export default function Home() {
    const [books, setBooks] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [booksPerPage] = useState(10);

    
    const indexOfLastBook = currentPage * booksPerPage;
    const indexOfFirstBook = indexOfLastBook - booksPerPage;
    const currentBooks = books.slice(indexOfFirstBook, indexOfLastBook);
    const paginate = (pageNumber) => {
        if(pageNumber){
            setCurrentPage(pageNumber);
        }        
    };

    const loadBooks = () => {
        axios.get("http://localhost:3003/books").then((res) => {
                setBooks(res.data.reverse());
            });
        }
 
    useEffect(() => {
        loadBooks();
    }, [currentBooks]);

    function Delete(id){
        axios.delete(`http://localhost:3003/books/${id}`).then(loadBooks())
    }

  return (
    <div className='w-full h-full flex flex-col px-10 py-8'>
        <div className='w-full flex flex-col flex-min-h-50-[vh] justify-center items-center '>
                <h1 className='text-black text-3xl font-semibold '>
                    Home Page
                </h1>
                    <table className="w-[90%] text-center overflow-hidden overflow-y-scroll mt-8">
                    <thead className="bg-white border-b">
                        <tr>
                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-center">
                            id
                        </th>
                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-center">
                            Title
                        </th>
                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-center">
                            Author
                        </th>
                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-center">
                            Year
                        </th>
                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-center">
                            Action
                        </th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentBooks.map((data, index)=>(
                        <tr key={index} className="bg-gray-100 border-b ">
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{index+1}</td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                {data.title}
                            </td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                {data.author}
                            </td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                {data.year}
                            </td>
                            <td className="flex justify-center items-center space-x-4 whitespace-nowrap">
                                <Link to={`edit-books/${data.id}`} className="px-6 py-2 text-white bg-green-800 rounded-xl font-semibold">Edit</Link>
                                <button onClick={()=>Delete(data.id)} className="px-6 py-2 text-white bg-red-800 rounded-xl font-semibold">Delete</button>
                                <Link to={`books/${data.id}`} className='px-6 py-2 text-white bg-blue-800 rounded-xl font-semibold'>View</Link>
                            </td>
                        </tr>
                        ))}
                    </tbody>
                    </table>
                    <div className="flex justify-center">
                        <Pagination booksPerPage={booksPerPage} totalBooks={books.length} paginate={paginate} />
                    </div>
        </div>
    </div>
  )
}
