import { useContext } from "react";
import Сontext from "./context";

const BookItem = ({ dataItem, setIsDelete }) => {
  const { setIsEdit, setEditItem } = useContext(Сontext);

  const { bookName, bookAutor, bookCover, id } = dataItem;

  const onDelete = (id) => {
    localStorage.removeItem(id);
    setIsDelete(id);
  };

  const onEdit = (id) => {
    setIsEdit(true);
    setEditItem(id);
  };

  return (
    <li className="book-item row" key={id}>
      <img
        src={bookCover || "book.png"}
        className="book-img mgr-24"
        alt="book-cover"
      />
      <div className="book-details">
        <div className="book-name mgb-12">{bookName}</div>
        <div className="book-autor">{bookAutor}</div>
        <div className="book-actions">
          <button className="btn btn_aqua mgr-8" onClick={() => onEdit(id)}>
            Edit
          </button>
          <button
            className="btn btn_delete"
            onClick={() => {
              onDelete(id);
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </li>
  );
};

export default BookItem;
