import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    // setnote is a function
    title: "",
    content: ""
  });
  function handleChange(event) {
    // 1-keps the track of the title and comtent
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote, // spread oprator
        [name]: value
      };
    });
  }
  function submitNote(event) {
    props.onAdd(note); // 2-calling onAdd from aap.jsx
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }
  return (
    <div>
      <form>
        <input
          name="title"
          onChange={handleChange} // function to be called during user input
          value={note.title}
          placeholder="Title"
        />
        <textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows="3"
        />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
