import { useContext } from "react";
import Сontext from "./context";
const Header = () => {
  const { setIsEdit } = useContext(Сontext);

  return (
    <header className="row header mgb-24">
      <h1>Список книг</h1>
      <button className="btn btn_aqua"
        onClick={() => setIsEdit(true)}>
        Add book
      </button>
    </header>
  );
};

export default Header;
