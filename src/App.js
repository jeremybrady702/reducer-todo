import React, { useReducer } from "react";
import { todoReducer, initialState } from "./reducers";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import "./App.css";

function App() {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  const addTodo = item => dispatch({ type: "ADD_TODO", text: item });
  const toggleComplete = id => dispatch({ type: "TOGGLE_COMPLETE", id: id });
  const clearComplete = () => dispatch({ type: "CLEAR_COMPLETE" });
  //Some handlers

  return (
    <div className="App">
      <TodoForm addTodo={addTodo} clearComplete={clearComplete} />
      <TodoList todos={state.todos} toggleComplete={toggleComplete} />
    </div>
  );
}

export default App;
