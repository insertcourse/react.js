## useEffect

useEffect는 컴포넌트가 렌더링될 때마다 특정 작업을 수행할 수 있게 하는 훅이다.  
예를 들어 유저의 정보가 바뀔 경우에 어떤 작업을 수행하거나, 유저가 처음 방문했을 때 어떤 작업을 수행하고 싶다면  
이 훅을 쓰면 적합하다. 코드로 알아보자.

```jsx
import { useState, useEffect } from 'react'

const Hello = () => {
	const [name, setName] = useState('')
	const [id, setId] = useState('')

	useEffect(() => {
		console.log('Hello!!')
	})

	return (
		<div>
			<input
				type="text"
				onChange={(e) => {
					setName(e.target.value)
				}}
				value={name}
			/>
			<input
				type="text"
				onChange={(e) => {
					setId(e.target.value)
				}}
				value={id}
			/>
		</div>
	)
}
```

다음의 코드를 짠 후 DOM에 코드를 실행해보면, 처음에 Hello!!가 한 번 나온 후 input 박스의 내용이  
바뀔 때마다 Hello!!를 출력한다. useEffect는 컴포넌트가 리렌더링될 때마다 작업을 수행한다.

## 처음에만 실행하고 싶을 때

useEffect는 두 가지의 파라미터를 받을 수 있다. 첫 번째는 작업을 수행하는 코드가 담겨있는 함수이고, 두 번째는 배열이다.  
두 번째로 들어가는 배열에 아무것도 없는 빈 배열을 넣으면 컴포넌트가 렌더링되고 처음에만 한번 실행이 된다.

```jsx
import { useState, useEffect } from 'react'

const Hello = () => {
	const [name, setName] = useState('')
	const [id, setId] = useState('')

	useEffect(() => {
		console.log('Hello!!')
	}, []) // console log는 한번만 실행됨.

	return (
		<div>
			<input
				type="text"
				onChange={(e) => {
					setName(e.target.value)
				}}
				value={name}
			/>
			<input
				type="text"
				onChange={(e) => {
					setId(e.target.value)
				}}
				value={id}
			/>
		</div>
	)
}
```

useEffect를 통해서 처음 불러오는 상태를 유연하게 관리할 수 있으며, 또는 백엔드와의 통신에서 HTTP 요청을 보낼 때에 자주 쓰인다.

## 특정 값이 업데이트될 때만 실행하고 싶을 때

특정 값이 업데이트될 때만 실행하고 싶다면, 배열 안에 특정 값을 넣어주면 된다. 코드를 보자.

```jsx
import { useState, useEffect } from 'react'

const Hello = () => {
	const [name, setName] = useState('')
	const [id, setId] = useState('')

	useEffect(() => {
		console.log('Hello!!')
	}, [name]) // name이 변경될 때마다 Hello!!가 출력된다.

	return (
		<div>
			<input
				type="text"
				onChange={(e) => {
					setName(e.target.value)
				}}
				value={name}
			/>
			<input
				type="text"
				onChange={(e) => {
					setId(e.target.value)
				}}
				value={id}
			/>
		</div>
	)
}
```

이 코드는 name이 변경될 때마다, 즉 name input 박스의 내용이 바뀔 때마다 Hello!!를 출력하는 코드이다.  
이를 통해서 유연한 상태 관리를 할 수 있으며, 특정 작업 또한 가능해진다. 또, 배열 안에는 여러가지의 특정 값을 넣을 수 있다.  
두 개 이상의 값을 넣게 되면, 그 중 하나만이 변경되더라도 작업을 수행한다.

```jsx
import { useState, useEffect } from 'react'

const Hello = () => {
	const [name, setName] = useState('')
	const [id, setId] = useState('')

	useEffect(() => {
		console.log('Hello!!')
	}, [name, id]) // name 혹은 id가 변경될 때마다 Hello!!가 출력된다.

	return (
		<div>
			<input
				type="text"
				onChange={(e) => {
					setName(e.target.value)
				}}
				value={name}
			/>
			<input
				type="text"
				onChange={(e) => {
					setId(e.target.value)
				}}
				value={id}
			/>
		</div>
	)
}
```

컴포넌트가 언마운트되기 전이나 업데이트되기 직전에 작업을 수행하고 싶을 때 cleanup함수를 반환해줄 수 있다.  
위 코드의 useEffect 부분을 다음과 같이 수정해보자.

```jsx
useEffect(() => {
	console.log('Hello!!')

	return () => {
		console.log('Clean Up!')
	}
}, [name, id])
```

이제 코드를 확인해보면 컴포넌트가 렌더링 될때마다 cleanup함수가 콘솔에서 계속 나타난다. 또 cleanup함수가 호출될 때  
업데이트 직전의 값을 계속 보여주는 것을 확인할 수 있다.  
오직 언마운트될 때만 cleanup함수를 호출하고 싶다면, 빈 배열을 넣어 사용하면 된다!

useEffect는 기본적으로 렌더링되었을 때 무조건 한번 실행된다. 두 번째 파라미터(배열)에 무엇을 넣는지에 따라  
실행되는 조건이 달라진다. 만약 처음 렌더링될 때 실행하고 싶지 않다면, useDidMountEffect라는 커스텀 훅을 이용해보자!
