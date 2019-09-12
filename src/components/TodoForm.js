import React, { useState } from "react";

const TodoForm = props => {
  const [input, setInput] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    props.addTodo(input);
    setInput("");
  };

  const handleClear = e => {
    e.preventDefault();
    props.clearComplete();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="todo"
        value={input}
        onChange={e => setInput(e.target.value)}
      />
      <button type="submit">Add Todo</button>
      <button onClick={handleClear}>Clear Complete</button>
    </form>
  );
};

export default TodoForm;
//State for our inputs needs to be here

//handlers

//form down here somewhere
