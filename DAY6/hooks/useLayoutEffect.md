## useLayoutEffect

useLayoutEffect는 useEffect와 이름도 유사하고, 함수의 형태도 매우 유사하다.  
그럼 어떤 점이 다를까?

## 차이점이 뭘까?

useEffect는 DOM에 레이아웃이 모두 배치되고 나서 실행되는 함수이다.  
허나 useLayoutEffect는 말그대로 레이아웃이 배치되기 전, 사용자가 레이아웃을 보기 전에  
작업을 수행시켜주는 함수이다. 이는 굉장히 유용하다.

useEffect를 통해서 백엔드에 api를 불러와 통신하는 경우가 많은데, 호출 중의 과정에서  
잠깐 동안 기본값을 사용자의 화면에 보여주는 경우가 있다. 만약 api를 불러오는데 1초가 걸린다고 하자.

```js
import { useEffect } from 'react'

const ApiService = () => {
	const [name, setName] = useState('')
	const [id, setId] = useState(0)

	useEffect(() => {
		const res = apiFunc() // <-- 작업하는 데에 1초가 걸림
		setName(res.name)
		setId(res.id)
	}, [])

	return (
		<div>
			<h1>이름 : {name}</h1>
			<h1>아이디 : {id}</h1>
		</div>
	)
}
```

다음과 같은 상황에서는 화면에서 어떻게 보일까?  
useEffect로 처음 렌더링이 된 후 api를 가져오는 작업을 수행할 것이다.  
허나 그 작업을 하는데에 1초가 걸린다고 가정하면, 사용자는 그 1초동안 다음과 같은 텅빈 기본값을 보고만 있어야할 것이다.

```
이름 :
아이디 : 0
```

이후에 1초가 지나면 다시 불러온 api로 값이 바뀔테지만, 어떻게 보면 서비스의 결함이라고 볼 수도 있다.

```
이름 : 우빈
아이디 : 47
```

허나 useLayoutEffect를 사용하면, 레이아웃이 배치되기 전에 렌더링을 수행하기 때문에 1초가 걸리는  
api를 불러온다 하더라도 사용자에게 바로 불러온 api값을 보여줄 수 있을 것이다.

```js
import { useEffect } from 'react'

const ApiService = () => {
	const [name, setName] = useState('')
	const [id, setId] = useState(0)

	useLayoutEffect(() => {
		const res = apiFunc() // <-- 작업하는 데에 1초가 걸림
		setName(res.name)
		setId(res.id)
	}, [])

	return (
		<div>
			<h1>이름 : {name}</h1>
			<h1>아이디 : {id}</h1>
		</div>
	)
}
```

다음 코드에서의 화면은 어떻게 보일까?

```
이름 : 우빈
아이디 : 47
```

렌더링하는 데에 시간이 걸릴지라도 이렇게 바로 불러온 값이 뜰 것이다. 정말 유용하다!  
여태껏 이 훅을 왜 사용하지 않았는지 모르겠다. 내 프로젝트를 할 때에도 이 훅을 애용해보아야겠다.
