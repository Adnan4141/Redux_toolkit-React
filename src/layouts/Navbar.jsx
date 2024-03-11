import { Link } from "react-router-dom"


const Navbar = () => {
  return (
 <div className="bg-red-500">
  <div className="flex gap-4 bg-blue-900 text-white justify-center">
    <Link to="/">Home</Link>
    <Link to={"/show-books"}>Show Books</Link>
    <Link to={"/add-book"}>Add Books</Link>
    </div>
 </div>
  )
}

export default Navbar