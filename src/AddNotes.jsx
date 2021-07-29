import React, { useState } from "react";
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

function AddNotes(props) {

    const [expand, setExpand] = useState(false);
    
    const [note, setNote] = useState({
        title: '',
        content: ''
    });

    const InputEvent = (event) => {

        const {name, value} = event.target;

        setNote((old) => {
            return {
                ...old,
                [name] : value
            };
        });
    };

    const addEvent = () => {
        props.passNote(note);
        setNote({
            title: '',
            content: ''
        });
    };

    const expandIt = () => {
        setExpand(true);
    };  

    const normal = () => {
        setExpand(false);
    };

  return (
    <>
      <div className="main-note"  onDoubleClick={normal}>
          <form>
              {expand ?
              <input type="text" name="title" value={note.title} onChange={InputEvent} placeholder="Title" autoComplete="off" /> : null}

              <textarea rows='' column='' name="content" value={note.content} onChange={InputEvent} placeholder='Write a note ...' onClick={expandIt}></textarea>

              {expand ? (
              <Button className="btn" onClick={addEvent}>
                <AddIcon className="plus-sign"/>
              </Button>
               ) : null}
          </form>
      </div>
    </>
  );
}

export default AddNotes;
