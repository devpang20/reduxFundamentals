import React, { useState } from "react";

const TodoInsert = ({ onInsert }) => {
  const [text, setText] = useState("");

  const onSubmit = (e) => {
    onInsert(text);
    setText("");
    e.preventDefault();
  };

  const onChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" onChange={onChange} value={text} />
        <button type="submit">입력</button>
      </form>
    </div>
  );
};

export default TodoInsert;
