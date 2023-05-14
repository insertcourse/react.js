import React from 'react'

const Greeting = () => {
    const [message, setMessage] = React.useState("안녕하세요!")
    const [color, setColor] = React.useState("red")

    const changeMessage1 = () => {
        setMessage("안녕히가세요!")
    }
    const changeMessage2 = () => {
        setMessage("안녕하세요!")
    }

    const changeColor1 = () => {
        setColor("red")
    }
    const changeColor2 = () => {
        setColor("green")
    }
    const changeColor3 = () => {
        setColor("blue")
    }



    return (
        <div>
            <div>
                <button onClick={changeMessage2}>입장</button>
                <button onClick={changeMessage1}>퇴장</button>
            </div>
            <div>
                <h1>{message}</h1>
            </div>
            <div>
                <button onClick={changeColor1} style={{color:"red"}}>빨간색</button>
                <button onClick={changeColor2} style={{color:"green"}}>초록색</button>
                <button onClick={changeColor3} style={{color:"blue"}}>파란색</button>
            </div>
        </div>
    )
}

export default Greeting