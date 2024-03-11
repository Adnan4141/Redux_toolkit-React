import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addBook } from "./BooksSlice"
import { useNavigate } from "react-router-dom"
import { v4 as uuidv4 } from 'uuid';
import PageTitle from "../../layouts/PageTitle";

const AddBook = () => {
   const [title,setTitle]= useState("")
   const [author,setAuthor]= useState("")
    const dispatch =useDispatch();
    const navigate = useNavigate();


   const handleSubmit =(e)=>{
       e.preventDefault();
       const book =  {id:uuidv4(), title,author};
       dispatch(addBook(book))
     navigate("/show-books",{replace:true});
   }
  return (
    <div className=" items-center text-white">
    <PageTitle title={"Add Book"}/>
    <h2 className="text-blue-950 text-center font-semibold">Add Book</h2>
     <div className="bg-blue-600 ">


         <form onSubmit={handleSubmit} className="flex flex-col justify-center gap-3 py-3 items-center">
      <div>
        <label htmlFor="title">Title: </label>
        <input className="text-gray-700 border" type="text" id="title" name="title" value={title} required
          onChange={(e)=>setTitle(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="author">Author:</label>
        <input className="text-red-600" type="text" id="author" name="author" value={author} required
          onChange={(e)=>setAuthor(e.target.value)}
        />
      </div>
       
      <button className="px-3 py-1 bg-zinc-900 rounded-sm hover:bg-zinc-600">Add /Submit</button>


         </form>
     </div>
    </div>
  )
}

export default AddBook