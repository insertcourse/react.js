import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import TodoList from '../TodoList/TodoList';
import Main from '../Main';



const App = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Main />}></Route>
                <Route path='/Todolist' element={<TodoList />}></Route>
            </Routes>
        </Router>
    );
};

export default App;