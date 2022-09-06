import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

function Edit() {

  const[title, setTitle] = useState("");
  const[author, setAuthor] = useState("");
  const[year, setYear] = useState("");

  const navigate=useNavigate();
  
  const { id } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:3003/books/${id}`).then((res) => {
            setTitle(res.data.title);
            setAuthor(res.data.author);
            setYear(res.data.year);
        })
    }, []);

    const data = {
      title: title,
      author: author,
      year: year
    }

    function Update(e){
      e.preventDefault();
      axios.put(`http://localhost:3003/books/${id} `, data).then(
        navigate("/")
      )
    }


  return (
    <div className="w-screen h-full flex flex-col justify-center  items-center mt-16">
      <h1 className='text-3xl font-semibold '>Edit Book</h1>
      <form className="w-[80%] h-full flex flex-col justify-center items-center mt-4">

        <input 
        value={title}
        onChange={(e)=>setTitle(e.target.value)} 
        placeholder='Enter Title of the Book' 
        className='w-[80%] bg-white text-xl font-normal outline-none py-4 pl-6 border border-black-400 mt-4'/>

        <input 
        value={author}
        onChange={(e)=>setAuthor(e.target.value)} 
        placeholder='Enter Author Name' 
        className='w-[80%] bg-white text-xl font-normal outline-none py-4 pl-6 border border-black-400 mt-4'/>

        <input 
        value={year}
        onChange={(e)=>setYear(e.target.value)} 
        placeholder='Enter Year of publishment' 
        className='w-[80%] bg-white text-xl font-normal outline-none py-4 pl-6 border border-black-400 mt-4'/>

        <button onClick={Update} className='w-[80%] bg-green-500 mt-4 text-white font-semibold text-xl py-4 pl-6'> Edit Book</button>
      </form>

    </div>
  )
}

export default Edit