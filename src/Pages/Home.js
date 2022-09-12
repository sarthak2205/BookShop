import React, {useEffect, useState} from 'react';
import axios from "axios";
import { Pagination } from '../Components/Pagination';
import { Link } from 'react-router-dom';
import { BsFillPencilFill } from 'react-icons/bs';
import { AiFillDelete, AiFillEye } from 'react-icons/ai';

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
    <div className='min-h-screen bg-slate-200'>
        <div className='flex flex-col px-10 py-8 '>
        <div className='flex flex-col justify-center items-center '>
                <h1 className='text-black text-3xl font-semibold '>
                    Home Page
                </h1>
                <div className='w-full h-full text-center '>
                    <div className='text-center overflow-x-scroll mt-8 '>

                    <table className="w-full md:h-[90%]">
                    <thead className="bg-indigo-300 border-b">
                        <tr>
                        <th scope="col" className="text-base font-extrabold text-gray-900 px-6 py-4 text-center">
                            ID
                        </th>
                        <th scope="col" className="text-base font-extrabold text-gray-900 px-6 py-4 text-center">
                            Title
                        </th>
                        <th scope="col" className="text-base font-extrabold text-gray-900 px-6 py-4 text-center">
                            Author
                        </th>
                        <th scope="col" className="text-base font-extrabold text-gray-900 px-6 py-4 text-center">
                            Year
                        </th>
                        <th scope="col" className="text-base font-extrabold text-gray-900 px-6 py-4 text-center">
                            Action
                        </th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentBooks.map((data, index)=>(
                        <tr key={index} className="even:bg-blue-100 odd:bg-white border-b ">
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{index+1}</td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap md:font-semibold">
                                {data.title}
                            </td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap md:font-semibold">
                                {data.author}
                            </td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap md:font-semibold">
                                {data.year}
                            </td>
                            <td className="flex justify-center items-center space-x-5 whitespace-nowrap py-2 ">
                                <Link to={`edit-books/${data.id}`} className=" py-2 rounded-xl font-semibold pl-5">
                                    <div className='icons-edit'>
                                        <BsFillPencilFill/>
                                    </div>
                                </Link>
                                <button onClick={()=>Delete(data.id)} className="py-2 rounded-xl font-semibold">
                                    <div className='icons-delete' >
                                        <AiFillDelete />
                                    </div>
                                </button>
                                <Link to={`books/${data.id}`} className='py-2 rounded-xl font-semibold pr-5'>
                                    <div className='icons-view'>
                                        <AiFillEye />
                                    </div>
                                </Link>
                            </td>
                        </tr>
                        ))}
                    </tbody>
                    </table>
                    </div>
                </div>
                    
                    <div className="flex justify-center">
                        <Pagination booksPerPage={booksPerPage} totalBooks={books.length} paginate={paginate} />
                    </div>
        </div>
    </div>
    </div>
    
  )
}
