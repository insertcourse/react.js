import React from "react";
import TodoListItem from "../TodoListItem/TodoListItem";
import Header from "../Header/Header";
import AddToDo from "../../../DAY7/todolist/AddToDo/AddToDo";

const TodoList = ({ todoes }) => {
  return (
    <div>
      <Header />
      <AddToDo onAddTodo={undefined} />
      {todoes.map((todo) => (
        <TodoListItem todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
