import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function AddBook() {
  const[title, setTitle] = useState("");
  const[author, setAuthor] = useState("");
  const[year, setYear] = useState("");
  const[edition, setEdition] = useState("");
  const[categories, setCategories] = useState("");
  const[description, setDescription] = useState("");
  const[pages, setPages] = useState("");

  const navigate= useNavigate();

  const data = {
    title: title,
    author: author,
    year: year,
    edition: edition,
    categories: categories,
    pages: pages,
    description: description
  }


  function Submit(e){
    e.preventDefault();
    axios.post("http://localhost:3003/books", data).then(navigate("/"))
    console.log(data);
  }

  return (
    <div className="w-screen h-full flex flex-col justify-center  items-center mt-16">
      <h1 className='text-3xl font-semibold '>Add Book</h1>
      <form className="w-[80%] h-full flex flex-col justify-center items-center mt-4">

        <input 
        onChange={(e)=>setTitle(e.target.value)} 
        placeholder='Enter Title of the Book' 
        className='w-[80%] bg-white text-xl font-normal outline-none py-4 pl-6 border border-black-400 mt-4'/>

        <input 
        onChange={(e)=>setAuthor(e.target.value)} 
        placeholder='Enter Author Name' 
        className='w-[80%] bg-white text-xl font-normal outline-none py-4 pl-6 border border-black-400 mt-4'/>

        <input 
        onChange={(e)=>setYear(e.target.value)} 
        placeholder='Enter Year of publishment' 
        className='w-[80%] bg-white text-xl font-normal outline-none py-4 pl-6 border border-black-400 mt-4'/>

        <input 
        onChange={(e)=>setEdition(e.target.value)} 
        placeholder='Enter Edition' 
        className='w-[80%] bg-white text-xl font-normal outline-none py-4 pl-6 border border-black-400 mt-4'/>

        <input 
        onChange={(e)=>setCategories(e.target.value)} 
        placeholder='Enter Categories' 
        className='w-[80%] bg-white text-xl font-normal outline-none py-4 pl-6 border border-black-400 mt-4'/>

        <input 
        onChange={(e)=>setPages(e.target.value)} 
        placeholder='Enter Pages' 
        className='w-[80%] bg-white text-xl font-normal outline-none py-4 pl-6 border border-black-400 mt-4'/>

        <input 
        onChange={(e)=>setDescription(e.target.value)} 
        placeholder='Enter Description' 
        className='w-[80%] bg-white text-xl font-normal outline-none py-4 pl-6 border border-black-400 mt-4'/>

        <button onClick={Submit} className='w-[80%] bg-green-500 mt-4 text-white font-semibold text-xl py-4 pl-6'> Add Book</button>
      </form>

    </div>
  )
}

export default AddBook