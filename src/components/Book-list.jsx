import { useState } from "react";
import BookItem from "./Book-item";

const BookList = () => {
  const [idDelete, setIsDelete] = useState(null);
  const mapItems = () => {
    let keys = Object.keys(localStorage);
    let listItems = [];

    if (keys.length === 0) {
      return <h2>Список пуст. Добавьте книги в список.</h2>;
    }

    for (let key of keys) {      
      const dataItem = JSON.parse(localStorage.getItem(key));
      listItems.push(
        <BookItem key={key} dataItem={dataItem} setIsDelete={setIsDelete} />
      );
    }
    return listItems;
  };

  return <ul className="book-list">{mapItems()}</ul>;
};

export default BookList;
