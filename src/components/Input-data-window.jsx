import { useContext, useEffect, useRef, useState } from "react";
import { getBase64Img, getUniqueId } from "../utils/utils";
import Сontext from "./context";

const InputDataWindow = () => {
  const [bookName, setBookName] = useState("");
  const [bookAutor, setBookAutor] = useState("");
  const [bookCover, setBookCover] = useState("");

  const { setIsEdit, setEditItem, editItem } = useContext(Сontext);

  const itemData = useRef(null);

  useEffect(() => {
    if (editItem) {
      itemData.current = JSON.parse(localStorage.getItem(editItem));

      setBookName(itemData.current.bookName);
      setBookAutor(itemData.current.bookAutor);
    }
  }, [editItem]);

  const onCancel = () => {
    setIsEdit(false);
    setEditItem(null);
  };

  const addBook = (bookData, id) => {
    localStorage.setItem(id, JSON.stringify(bookData));
  };

  const onSubmit = () => {
    if (editItem) {

      const bookData = {
        bookName: bookName || itemData.current.bookName,
        bookAutor: bookAutor || itemData.current.bookAutor,
        bookCover: bookCover || itemData.current.bookCover,
        id: itemData.current.id,
      };

      addBook(bookData, editItem);
      onCancel();
    } else {
      const id = getUniqueId();
      const bookData = {
        bookName: bookName || "Book",
        bookAutor: bookAutor || "Author",
        bookCover: bookCover || "book.png",
        id,
      };

      addBook(bookData, id);
      onCancel();
    }
  };

  const foo = async(e) => {    
    const uri = await getBase64Img(e.target.files[0]);
    setBookCover(uri);
  }

  return (
    <div className="input-container">
      <div className="input-data  col">
        <h3 className="mgb-24">{editItem ? "Edit book" : "Add book"}</h3>
        <label className="mgb-12">
          Name of the book
          <input
            value={bookName}
            className="text-input"
            type="text"
            maxLength="50"
            onChange={(e) => setBookName(e.target.value)}
          />
        </label>
        <label className="mgb-24">
          Name of the author
          <input
            value={bookAutor}
            type="text"
            className="text-input"
            maxLength="50"
            onChange={(e) => setBookAutor(e.target.value)}
          />
        </label>
        <input
          className="file-input"
          id="upload"
          type="file"
          accept="image/*"
          onChange={ foo
          //   (e) => {
          //   getBase64Img(e, setBookCover);
          // }
        }
        />
        <label htmlFor="upload" className="mgb-12">
          <svg width="20" height="17" viewBox="0 0 20 17">
            <path d="M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z" />
          </svg>
          <span> Upload a book cover</span>
        </label>
        <button className="btn btn_aqua mgb-12" onClick={onSubmit}>
          Enter
        </button>
        <button className="btn" onClick={onCancel}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default InputDataWindow;
