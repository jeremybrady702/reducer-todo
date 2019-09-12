export const initialState = {
  todos: [
    {
      item: "Review reducers",
      completed: false,
      id: 1235468765413,
    },
  ],
};

export function todoReducer(state, action) {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [
          ...state.todos,
          { item: action.text, id: Date.now(), completed: false }
        ]
      };
    case "TOGGLE_COMPLETE":
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
        )
      };
    case "CLEAR_COMPLETE":
      return {
        ...state,
        todos: state.todos.filter(todo => !todo.completed)
      };
    default:
      return state;
  }
}

//cases down here
