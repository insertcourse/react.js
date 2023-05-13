## useReducer

useReducer는 useState와 같은 상태를 관리하는 Hook이나, 더 다양한 상황에서 다양한 상태를 다른 값으로 업데이트 해준다.  
리덕스의 문법과 매우 유사하며, useState와 다르게 컴포넌트 밖에서도 상태를 관리할 수 있으며, 여러가지의 함수를 동시에 선언할 수 있다.  
리듀서는 현재 상태와 업데이트에 필요한 액션 값을 전달받아 새로운 상태를 반환해준다.

```jsx
function reducer(state, action){
    return { ... }
}

{
    type: 'INCREMENT',
    // 다른 값이 필요하면 추가적으로 들어감
}
```

reducer는 함수를 만든 후, dispatch라는 키워드를 사용하여 한 함수로 여러 값들을 핸들링할 수 있다. 코드로 살펴보자!

```jsx
import { useReducer } from 'react'

function reducer(state, action) {
	switch (action.type) {
		case 'INCREMENT':
			return { value: state.value + 1 }
		case 'DECREMENT':
			return { value: state.value - 1 }
		default:
			return state // 아무 타입도 아닐 때 기존 상태 반환
	}
}
```

리듀서 함수는 이런 식으로 정의할 수 있다. 첫 번째 파라미터에는 변경될 상태값이 들어오며,  
두 번째 파라미터에는 변경할 액션의 타입이 들어온다. 이 함수를 useReducer와 dispatch 키워드를 통해 다음과 같이 사용할 수 있다.

```jsx
const Counter = () => {
	const [state, dispatch] = useReducer(reducer, { value: 0 })

	return (
		<div>
			<h1>Counter : {state.value}</h1>
			<button
				onClick={() => {
					dispatch({ type: 'INCREMENT' })
				}}>
				+1
			</button>
			<button
				onClick={() => {
					dispatch({ type: 'DECREMENT' })
				}}>
				-1
			</button>
		</div>
	)
}
```

useReducer의 첫 번째 파라미터에 리듀서 함수를 넣고, 두 번째 파라미터에 해당 리듀서의 기본값을 넣는다.  
또 dispatch 키워드 안에 type을 지정해주어, 리듀서 함수의 어떤 액션을 실행할지 정해줄 수 있다.  
가장 큰 장점은 컴포넌트 업데이트 로직을 컴포넌트 바깥으로 빼낼 수 있다는 것이다! (최적화된 모듈화 가능)

## Input 상태 관리하기

기존에는 인풋이 여러 개일 때 useState를 여러 번 사용해야 했는데, useReducer를 사용하면 한 함수로  
input 태그에 name을 할당해 setState를 해주는 클래스형 컴포넌트의 방식과 유사하게 효율적으로 처리할 수 있다.

```jsx
import { useReducer } from 'react'

function reducer(state, action) {
	return {
		...state,
		[action.name]: action.value,
	}
}

const Info = () => {
	const [state, dispatch] = useReducer(reducer, {
		name: '',
		nickname: '',
	})
	const { name, nickname } = state // 비구조화 할당
	const onChange = (e) => {
		dispatch(e.target)
	}

	return (
		<div>
			<h1>name : {name}</h1>
			<h1>nickname : {nickname}</h1>
			<input name="name" value={name} onChange={onChange} />
			<input name="nickname" value={nickname} onChange={onChange} />
		</div>
	)
}
```

이런 식으로 리듀서 함수를 통해 인풋값을 관리하면 인풋의 개수가 아무리 많더라도 이렇게 효율적으로 관리할 수 있다!
