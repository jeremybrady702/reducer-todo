import React from "react";
import Todo from "./Todo";

//we'll need a map in here for all the todos
const todoList = props => {
  const { todos, toggleComplete } = props;
  return (
    <ul>
      {todos.map(todo => (
        <Todo key={todo.id} {...todo} toggleComplete={toggleComplete} />
      ))}
    </ul>
  );
};
export default todoList;
