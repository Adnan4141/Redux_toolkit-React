import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Error from "../pages/Error";
import Navbar from "../layouts/Navbar";
import BooksView from "../feature/books/BooksView";
import AddBook from "../feature/books/AddBook";
import EditBook from "../feature/books/EditBook";


const Index = () => {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path ="/" element={<Home/>}/>
      <Route path="/show-books" element={<BooksView/>}/>
      <Route path="/add-book" element={<AddBook/>}/>
      <Route path="/edit-book" element={<EditBook/>}/>
      <Route path ="*" element={<Error/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default Index;