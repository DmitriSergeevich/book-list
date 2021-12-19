import React, { useState } from "react";
import BookList from "./Book-list";
import Header from "./Header";
import Сontext from "./context";
import InputDataWindow from "./Input-data-window";
import ErrorBoundry from "./ErrorBoundry/ErrorBoundry";

const App = () => {
  const [isEdit, setIsEdit] = useState(false);
  const [editItem, setEditItem] = useState(null);

  const appState = { isEdit, setIsEdit, editItem, setEditItem };

  return (
    <Сontext.Provider value={appState}>
      <ErrorBoundry>
        <div className="container">
          <Header />
          <BookList />
          {isEdit ? <InputDataWindow /> : null}
        </div>
      </ErrorBoundry>
      
    </Сontext.Provider>
  );
};

export default App;
