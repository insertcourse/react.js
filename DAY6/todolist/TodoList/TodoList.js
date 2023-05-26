import React from "react";
import TodoListItem from "../TodoListItem/TodoListItem";
import Header from "../Header/Header";
import AddToDo from "../AddToDo/AddToDo";

const TodoList = ({ todoes }) => {
  return (
    <div>
      <Header />
      <AddToDo />
      {todoes.map((todo) => (
        <TodoListItem todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
