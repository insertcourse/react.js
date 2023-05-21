import React from 'react';
import TodoListItem from './TodoListItem';
import Header from '.Header';

const TodoList = ({ todoes }) => {
    return (
        <div>
            <Header />
            {todoes.map((todo) => (
            <TodoListItem todo={todo} />
))}
        </div>
);
};

export default TodoList;
