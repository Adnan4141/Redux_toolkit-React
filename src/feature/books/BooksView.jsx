import { useDispatch, useSelector } from "react-redux";
import { deleteBook } from "./BooksSlice";
import { Link } from "react-router-dom";




const BooksView = () => {
const books = useSelector((state)=>(state.booksReducer.books))
console.log(books)
 const dispatch = useDispatch();
const handleDeleteBook = (id)=>{
  dispatch(deleteBook(id));
}


  return (
    <div className="flex flex-col justify-center items-center px-20">
    <h2 className="text-center font-bold">List of Books</h2>
    <div className=" text-white">

    <table className="border text-center w-full">
     <thead>
      <tr className="flex justify-between items-center py-1 gap-32 text-center bg-orange-900">
        <th>Title</th>
        <th>Author</th>
        <th>Action</th>
      </tr>
     </thead>
     {
      <tbody>
     {
      books.map((book)=>{
        const {id,title,author} = book;
     return <tr key={book.id} className="flex justify-between py-2  items-center gap-32 text-center my-3 bg-pink-700 ">
       
        <td>{title}</td>
        <td>{author}</td>
        <td className="flex gap-3">
          <Link to={'/edit-book'} state={{id,title,author}} className="px-4 py-1 hover:bg-slate-600 bg-slate-700 rounded-lg">Edit</Link>
          <button onClick={()=>handleDeleteBook(book.id)} className="px-4 py-1 hover:bg-slate-600 bg-slate-700 rounded-lg">Delete</button>
        </td>
      </tr>
      })
     }

      </tbody>
     
    }
    </table>

    </div>
    </div>
  )
}

export default BooksView;