const ADD_TODO = "todo/ADD_TODO";
const TOGGLE_TODO = "todo/TOGGLE_TODO";
const DELETE_TODO = "todo/DELETE_TODO";

let nextId = 1;
export const addTodo = (content) => ({
  type: ADD_TODO,
  todo: {
    id: nextId++,
    content,
    checked: false,
  },
});

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  id,
});

export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  id,
});

const todos = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return state.concat(action.todo);
    case TOGGLE_TODO:
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, checked: !todo.checked } : todo
      );
    case DELETE_TODO:
      return state.filter((todo) => todo.id !== action.id);
    default:
      return state;
  }
};

export default todos;
