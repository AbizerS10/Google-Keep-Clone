import React from "react";
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import { Button } from "@material-ui/core";

function Note(props) {
    const deleteNote = () => {
        props.deleteItem(props.id);
    };
  return (
    <>
      <div className="note">
          <h1>{props.title}</h1>
          <br/>
          <p>{props.content}</p>
          <Button className="btn">
          <DeleteOutlineIcon className="delete-sign" onClick={deleteNote}/>
          </Button>
      </div>
    </>
  );
}

export default Note;
 