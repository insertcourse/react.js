import React, { useState, useCallback, useLayoutEffect } from "react";
import "./AddToDo.scss";

const AddTodo = ({ onAddTodo }) => {
  const [todoText, setTodoText] = useState("");
  const inputChange = useCallback((e) => {
    setTodoText(e.target.value);
  }, []);

  const addTodo = useCallback(() => {
    if (todoText !== "") {
      //공백인지 아닌지 확인하기
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
