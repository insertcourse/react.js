import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom' //router
import TodoList from './TodoList';


const App = () => {
    return (
        <div>
        <Router>
            <Routes>
                <Route path='/'></Route>
                <Route path='/Todolist' element={<TodoList />}></Route>
            </Routes>
        </Router>
            <h1>안녕하세요</h1>
            <p>부산 소프트웨어 마이스터고를 다니고 있는 김영은입니돠...</p>
            <p>투두리스트를 만들어 보았습니다. 하하 </p>
            <p>전 불닭을 좋아합니다 감사합니다.</p>
        </div>
    
);
};

export default App;



