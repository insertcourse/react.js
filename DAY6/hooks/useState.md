## useState

useState는 리액트 훅 중 가장 기본적인 Hook이다. 함수형 컴포넌트의 상태를 관리할 때 사용된다.  
비구조화 할당을 통해서 사용할 수 있다. useState를 선언할 때 두 개의 배열 안에 선언한다.  
첫 번째 배열에 들어가는 것은 관리할 상태 값이며, 두 번째 배열에 들어가는 것은 상태 값을 관리해주는 함수이다.

```jsx
import { useState } from 'react'

const Counter = () => {
	const [value, setValue] = useState(0)

	return (
		<div>
			<h1>Counter : {value}</h1>
		</div>
	)
}
```

다음과 같이 useState를 사용할 수 있다. useState의 파라미터에는 상태의 초깃값을 넣어주어야한다.  
만약 상태 값이 number 타입이면 0을, string 타입이면 ""을 넣어주는 등의 타입에 맞는 초깃값 초기화가 중요하다.  
파라미터를 그냥 비워둘 경우 컴파일러가 타입 추론을 하기 어려워 타입 에러가 날 수 있다. 안정적인 코드를 지향하자!

## 이벤트 감지 시 상태 변경하기

특정 이벤트를 감지했을 때에 상태를 변경해야하는 경우가 굉장히 많을 것이다. 그럴 때에는,  
이벤트를 감지할 요소의 이벤트에 상태를 관리하는 함수를 등록해주면 된다. 다음 코드를 보자.

```jsx
import { useState } from 'react'

const Counter = () => {
	const [value, setValue] = useState(0)

	const onClickPlusValue = () => {
		setValue(value + 1)
	}

	const onClickMinusValue = () => {
		setValue(value - 1)
	}

	return (
		<div>
			<h1>Counter : {value}</h1>
			<button onClick={onClickPlusValue}></button>
			<button onClick={onClickMinusValue}></button>
		</div>
	)
}
```

다음과 같이 HTML 요소의 onClick 이벤트에 함수를 등록한 후, 그 함수에서 상태를 관리하는  
함수를 만들어 상태를 관리하면 된다. 아주 쉽죵??

또한 여기서 더욱 간결하게 onClick 이벤트에 바로 상태관리 함수를 등록해줄 수 있다.

```jsx
import { useState } from 'react'

const Counter = () => {
	const [value, setValue] = useState(0)

	return (
		<div>
			<h1>Counter : {value}</h1>
			<button
				onClick={() => {
					setValue(value + 1)
				}}></button>
			<button
				onClick={() => {
					setValue(value - 1)
				}}></button>
		</div>
	)
}
```

저번보다 코드의 길이도 줄고 훨씬 간편해진 것 같다! 주의할 점은 꼭 함수를 생성한 후  
그 안에 상태관리 함수를 등록해야한다는 것이다. 파라미터가 필요한 함수를 바로 호출해버리면 오류가 발생한다. 주의!!

```jsx
import { useState } from 'react'

const Counter = () => {
	const [value, setValue] = useState(0)

	return (
		<div>
			<h1>Counter : {value}</h1>
			<button onClick={setValue(value + 1)}></button> {/* 오류 발생 */}
		</div>
	)
}
```

## Input값 상태관리하기

위 예제는 onClick 이벤트만을 감지했지만, input값과 같은 클릭으로 관리할 수 없는 이벤트는 어떻게 할까?  
바로 input 이벤트 중 하나인 onChange 이벤트를 사용하면 된다.  
또한 input 박스 안에 있는 값을 이 이벤트를 통해서 핸들링할 수 있다.

```jsx
import { useState } from 'react'

const Input = () => {
	const [content, setContent] = useState('')

	const onChangeContent = (e) => {
		setContent(e.target.value) // input 박스에 입력되는 값
	}

	return (
		<div>
			<h1>입력값 : {value}</h1>
			<input
				type="text"
				onChange={(e) => {
					onChangeContent(e)
				}}
				value={content}
			/>
		</div>
	)
}
```

이런 식으로 직접적인 document 접근 없이 깔끔하게 상태를 관리할 수 있다.  
이 코드 또한 상태관리 함수를 바로 등록하여 간결한 사용이 가능하다!

```jsx
import { useState } from 'react'

const Input = () => {
	const [content, setContent] = useState('')

	return (
		<div>
			<h1>입력값 : {value}</h1>
			<input
				type="text"
				onChange={(e) => {
					setContent(e.target.value)
				}}
				value={content}
			/>
		</div>
	)
}
```

효율적이다! useState를 잘 사용하면 멋지고 빠른 상태 관리를 선보일 수 있다.  
useState를 잘 사용하자!!
