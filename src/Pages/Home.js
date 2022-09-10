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
    <div className='min-h-screen bg-slate-300'>
        <div className='flex flex-col px-10 py-8 '>
        <div className='flex flex-col justify-center items-center '>
                <h1 className='text-black text-3xl font-semibold '>
                    Home Page
                </h1>
                <div className='w-full text-center'>
                    <div className='text-center overflow-x-scroll mt-8 '>

                    <table className="w-full ">
                    <thead className="bg-gray-200 border-b">
                        <tr>
                        <th scope="col" className="text-sm font-bold text-gray-900 px-6 py-4 text-center">
                            id
                        </th>
                        <th scope="col" className="text-sm font-bold text-g   ray-900 px-6 py-4 text-center">
                            Title
                        </th>
                        <th scope="col" className="text-sm font-bold text-gray-900 px-6 py-4 text-center">
                            Author
                        </th>
                        <th scope="col" className="text-sm font-bold text-gray-900 px-6 py-4 text-center">
                            Year
                        </th>
                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-center">
                            Action
                        </th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentBooks.map((data, index)=>(
                        <tr key={index} className="even:bg-blue-100 odd:bg-white border-b ">
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
                            <td className="flex justify-center items-center space-x-10 whitespace-nowrap py-2">
                                <Link to={`edit-books/${data.id}`} className=" py-2 rounded-xl font-semibold"><BsFillPencilFill color='black'/></Link>
                                <button onClick={()=>Delete(data.id)} className=" py-2 rounded-xl font-semibold"><AiFillDelete color='black' /></button>
                                <Link to={`books/${data.id}`} className='py-2 rounded-xl font-semibold'><AiFillEye color='black' /></Link>
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
