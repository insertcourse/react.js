import React from 'react';
import TodoListItem from './TodoListItem';

const TodoList = ({ todoes }) => {
    return (
        <div>
            {todoes.map((todo) => (
            <TodoListItem todo={todo} />
))}
        </div>
);
};

export default TodoList;
