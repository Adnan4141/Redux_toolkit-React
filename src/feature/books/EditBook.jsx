import { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { updateBook } from "./BooksSlice";
import PageTitle from "../../layouts/PageTitle";

const EditBook = () => {
  const location = useLocation();
  const [id, setId] = useState(location.state.id);
  const [title, setTitle] = useState(location.state.title);
  const [author, setAuthor] = useState(location.state.author);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(updateBook({ id, title, author }));
    navigate("/show-books", { replace: true });
  };

  return (
    <div>
      <div className="flex justify-center items-center text-black font-semibold text-lg">
        EditBook
      </div>
      <PageTitle title={"Edit Book"}/>
      <div className="bg-blue-600 ">
        <form
          onSubmit={handleUpdate}
          className="flex flex-col justify-center gap-3 py-3 items-center"
        >
          <div>
            <label htmlFor="title">Title: </label>
            <input
              className="text-gray-700 border"
              type="text"
              id="title"
              name="title"
              value={title}
              required
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="author">Author:</label>
            <input
              className="text-red-600"
              type="text"
              id="author"
              name="author"
              value={author}
              required
              onChange={(e) => setAuthor(e.target.value)}
            />
          </div>

          <button className="px-3 py-1 bg-orange-300 rounded-sm hover:bg-zinc-600">
            Update Book
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditBook;
