import React from 'react';

const Greeting = () => {
const [message, setMessage] = React.useState("안녕하세요!");
const [color, setColor] = React.useState("red");


const enter = () => {
    setMessage("안녕하세요!");
};

const exit = () => {

const enter = () => {
    setMessage("안녕하세요!");
};

const exit = () => {

    setMessage("안녕히 가세요!");
};

const colorChange = (newColor) => {
    setColor(newColor);
};

return (
    <div>
    <button onClick={enter}>입장</button>
    <button onClick={exit}>퇴장</button>
    <br />
    <span style={{ color }}>{message}</span>
    <br />
    <button style={{color: 'red'}} onClick={colorChange("red")}>빨간색</button>
    <button style={{color: 'green'}} onClick={colorChange("green")}>초록색</button>
    <button style={{color: 'blue'}} onClick={colorChange("blue")}>파란색</button>
    </div>
);
};
};                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                

export default Greeting;
