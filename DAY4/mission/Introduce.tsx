import React from 'react';

interface IntroduceState {
    name: string;
    age: string;
    hobby: string;
}

const Introduce = () => {
    const [introduce, setIntroduce] = React.useState<IntroduceState>({
        name: '',
        age: '',
        hobby: ''
});

const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => { //input값을 가져옴 이벤트 타입 지정하기
    const { name, value } = e.target;
        setIntroduce(introState => ({
        ...introState,
        [name]: value// name을 가진 값을 value 로 설정
}));
};

const { name, age, hobby } = introduce;

    return (
        <div>
            <div>
                <input type="text" name="name" value={name} onChange={inputChange} />
                <input type="text" name="age" value={age} onChange={inputChange} />
                <input type="text" name="hobby" value={hobby} onChange={inputChange} />
            </div>
            <div>
                <h1>안녕하세요! 제 이름은 {name}입니다.</h1>
                <h1>제 나이는 {age}살입니다.</h1>
                <h1>취미는 {hobby}입니다.</h1>
            </div>
        </div>
);
};

export default Introduce;