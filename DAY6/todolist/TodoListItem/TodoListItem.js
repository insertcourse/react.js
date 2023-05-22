import React from "react";

const TodoListItem = ({ todo }) => {
  return (
    <div>
      <span>{todo.text}</span>
    </div>
  );
};

export default TodoListItem;
