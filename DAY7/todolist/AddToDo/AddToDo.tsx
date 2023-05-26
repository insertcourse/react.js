import React, { useState, useCallback, useLayoutEffect } from "react";
import "./AddToDo.scss";

const AddTodo = ({ onAddTodo }) => {
  const [todoText, setTodoText] = useState("");
  const inputChange = useCallback((e) => {
    setTodoText(e.target.value);
  }, []);

  const addTodo = useCallback(() => {
    if (todoText !== "") {
      onAddTodo({
        text: todoText,
      });
      setTodoText("");
    }
  }, [todoText, onAddTodo]);

  useLayoutEffect(() => {
    setTodoText(oninput);
  }, []);

  return (
    <div>
      <input type="text" value={todoText} onChange={inputChange} />
      <button onClick={addTodo}>+</button>
    </div>
  );
};

export default AddTodo;
