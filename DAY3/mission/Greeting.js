import React, {useState} from 'react'

const Greeting = () => {
    const [message, setMessage] = useState("안녕하세요!")
    const [color, setColor] = useState("red")

    const changeGoodbye = () => {
        setMessage("안녕히가세요!")
    }
    const changeHi = () => {
        setMessage("안녕하세요!")
    }

    return (
        <div>
            <div>
                <button onClick={changeHi}>입장</button>
                <button onClick={changeGoodbye}>퇴장</button>
            </div>
            <div>
                <h1 style={{color}}>{message}</h1>
            </div>
            <div>
                <button style={{color:"red"}} onClick={() => setColor("red")}>빨간색</button>
                <button style={{color:"green"}} onClick={() => setColor("green")}>초록색</button>
                <button style={{color:"blue"}} onClick={() => setColor("blue")}>파란색</button>
            </div>
        </div>
    )
}

export default Greeting