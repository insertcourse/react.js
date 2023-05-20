import React, { useLayoutEffect, useRef, useState } from 'react';

const Introduce = () => {
    const [input, setInput] = useState('')
    const [lists, setLists] = useState([])
    const [next, setNext] = useState(0)
    const inputName = useRef(null)

    //input에 입력할때마다 실행
    const onChange = (e) => {
        setInput(e.target.value)
    }

    useLayoutEffect(() => {
        setInput(input)
    }, [])

    const plus = (e) => {
        e.preventDefault() //새로고침 방지
        const inLists = lists.concat({ //concat : 기존 배열을 토대로 변경한 새로운 배열이 리턴. 기존 배열은 바뀌지 않음
            li: next,
            text:input
        })
        setNext(next+1) //li값 하나 추가

        setLists(inLists) //붙여준 리스트까지 포함된 리스트
        setInput('') //input 안에 있는 문자 지우기
    }

    const inputList = lists.map((list) => (
        <li key={list.li}>
        {list.text}</li>
    ))

    const reset = () => {
        setInput('')
    }
    
    return (
        <div>
            <form onSubmit={plus}>
                <input type='text' placeholder='입력하세여' value={input} onChange={onChange} ref={inputName}></input>
                <button>확인</button>
            </form>
            <button onClick={reset}>초기화</button> 
            <ul>{inputList}</ul>
        </div>
    );
};

export default Introduce;