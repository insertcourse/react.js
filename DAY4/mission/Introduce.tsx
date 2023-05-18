import React, { useState } from 'react';

const Introduce = () => {
    const [intro, setIntro] = useState({
		name : "이름을 입력하세용",
		age : "나이를 입력하세용",
		hobby : "취미를 입력하세용"
	})

	const onChange = (e) => {
		setIntro({...intro, [e.target.name] : e.target.value})
	}
    return (
        <div>
            <div>
				<input type='text' name='name' value={intro.name} onChange={onChange} />
				<input type="text" name="age" value={intro.age} onChange={onChange}/>
				<input type="text" name="hobby" value={intro.hobby} onChange={onChange}/>
			</div>
			<div>
				<h1>안녕하세요! 제 이름은 {intro.name}입니다.</h1>
				<h1>제 나이는 {intro.age}살입니다.</h1>
				<h1>취미는 {intro.hobby}입니다.</h1>
			</div>
        </div>
    );
};

export default Introduce;