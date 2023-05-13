## useCallback

useCallback은 useMemo와 아주 비슷한 함수이다. 이 훅은 만들어놓았던 함수를 재사용할 수 있게 도와준다.  
만약 useMemo를 사용한다고 하더라도, useMemo는 값만 재사용할 뿐 컴포넌트가 렌더링될 때마다 함수도 새롭게 만들어진 함수를 사용한다.  
렌더링이 자주 발생하거나 렌더링할 컴포넌트의 개수가 많아진다면, useCallback을 이용해서 최적화해줄 수 있다.

useCallback은 두 개의 파라미터를 받는데, 첫 번째 파라미터는 실행할 함수를, 두 번째 파라미터는 useEffect와 같이 배열을 넣으면 된다.  
배열에는 어떤 값이 바뀌었을 때 함수를 재생성할지의 여부를 결정할 수 있다. 코드를 살펴보자.

```jsx
import { useState, useCallback } from 'react'

const Input = () => {
	const [value, setValue] = useState('')
	const [number, setNumber] = useState(0)

	const onChangeValue = useCallback((e) => {
		setValue(e.target.value)
	}, []) // 처음 렌더링 될 때만 함수 생성 후 그 후로는 재사용

	const onChangeNumber = useCallback(
		(e) => {
			setNumber(e.target.value)
		},
		[number]
	) // number의 상태가 변할 때만 함수 생성

	return (
		<div>
			<input value={value} onChange={onChangeValue} />
			<input value={value} onChange={onChangeNumber} />
		</div>
	)
}
```

이런 식으로 코드를 작성하여, 불필요한 함수의 재생성을 최소화시킬 수 있다. 게시판의 글을 불러오는 함수나, 그 외에도  
여러가지 많은 데이터들을 불러오는 함수가 리렌더링될 때마다 새로 생성된다면, useCallback을 사용해 사이트를 최적화시켜보는 것도 좋을 것 같다.
