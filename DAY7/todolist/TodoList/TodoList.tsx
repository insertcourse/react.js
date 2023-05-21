import React from 'react';
import TodoListItem from './TodoListItem';
import Header from '.Header';
import AddToDo from '.AddTodo'


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
