import React from 'react';

const AddTodo = ({ onAddTodo }) => {
    const [todoText, setTodoText] = React.useState('');
    const inputChange = React.useCallback((e) => {
    setTodoText(e.target.value);
}, []);

const addTodo = useCallback(() => {
    if (todoText.trim() !== '') {
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