## useRef

useRef는 함수형 컴포넌트에서 ref를 쉽게 사용할 수 있게 도와준다. 보통 canvas를 사용할 때 많이 사용하고,  
그 외에도 로컬 변수나 여러가지 HTML 요소들을 작업할 때에도 많이 사용된다. useRef는 하나의 파라미터를 받는데,  
거기엔 ref의 초기값을 넣어주면 된다. 만약 초깃값이 로컬 변수가 아니라면 null을 넣어주자!  
파라미터에 아무 것도 넣지 않으면 TypeScript의 경우 에러를 발생시키기 때문에 꼭 null을 넣어주자.

코드를 통해 알아보자!

```jsx
import { useState, useRef } from 'react'

const Hello = () => {
	const input = useRef(null)

	const click = () => {
		input.current.focus()
	}

	return (
		<div>
			<input type="text" />
			<button onClick={click}>클릭!</button>
		</div>
	)
}
```

위 코드는 버튼을 누르면 자동으로 input 박스에 포커스가 가게 하는 코드다. 이런 식으로 useRef를 사용해서  
ref를 매우매우 간결하고 쉽게 다룰 수 있다!! current값은 실제 엘리먼트를 가리킨다.

또한 위에서 말한 로컬 변수를 사용해야할 때도 사용할 수 있다.

```jsx
import { useRef } from 'react'

const RefTest = () => {
	const id = useRef(0)
	const setId = (n) => {
		id.current = n
	}
}
```

허나 ref 값이 바뀌어도 컴포넌트가 리렌더링되지 않는다는 점을 주의해야 한다.
