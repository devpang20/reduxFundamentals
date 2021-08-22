import React from "react";

const TodoListItem = ({ todo, onDelete, onToggle }) => {
  return (
    <div>
      <span>({todo.id})</span>
      <input
        type="checkbox"
        checked={todo.checked}
        onChange={() => onToggle(todo.id)}
      />
      <span>{todo.content}</span>
      <button onClick={() => onDelete(todo.id)}>삭제</button>
    </div>
  );
};

export default TodoListItem;
