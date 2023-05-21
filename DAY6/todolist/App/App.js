import React, {useState, useCallback } from 'react';

const AddTodo = ({ onAddTodo }) => {
    const [todoText, setTodoText] = useState('');
    const inputChange = useCallback((e) => {
    setTodoText(e.target.value);
}, []);

const addTodo = useCallback(() => {
    if (todoText.trim() !== '') {//공백인지 아닌지 확인하기
        onAddTodo({
        text: todoText
});
        setTodoText('');
    }
}, [todoText, onAddTodo]);

return (
    <div>
        <input type="text" value={todoText} onChange={inputChange} />
        <button class="button" onClick={addTodo}>+</button>
    </div>
);
};

export default AddTodo;