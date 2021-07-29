import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import AddNotes from "./AddNotes";
import Note from "./Note";
import './index.css'

function App() {
  const [addItem, setAddItem] = useState([]);
  const addNote = (note) => {
    setAddItem((old) => {
      return [...old, note];
    });
  };
  const onDelete = (id) => {
    setAddItem((old) => 
      old.filter((curr, indx) => {
        return indx !== id;
      }));
  };

  return (
    <>
      <Header />
      <AddNotes passNote={addNote} />
      {addItem.map((val, index) => {
        return <Note key={index} id={index} title={val.title} content={val.content} deleteItem={onDelete}/>
      })}
      <Footer />
    </>
  );
}

export default App;
