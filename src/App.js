import React, { useRef, useState } from "react";
import TodoTemplate from "./components/TodoTemplate";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "item1",
      checked: true,
    },
    {
      id: 2,
      text: "item2",
      checked: true,
    },
    {
      id: 3,
      text: "item2",
      checked: true,
    },
  ]);

  const nextId = useRef(4);

  const onInsert = (text) => {
    setTodos([
      ...todos,
      {
        id: nextId.current,
        text,
        checked: false,
      },
    ]);
    nextId.current++;
  };

  const onToggle = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      )
    );
  };

  const onDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <TodoTemplate>
        <TodoInsert onInsert={onInsert} />
        <TodoList todos={todos} onToggle={onToggle} onDelete={onDelete} />
      </TodoTemplate>
    </div>
  );
};

export default App;
