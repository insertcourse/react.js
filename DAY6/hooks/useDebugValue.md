## useDebugValue

useDebugValue는 다른 리액트 훅에 일종의 라벨을 붙여주는 것을 도와준다. 어떤 훅이 어디에서 사용되고 있는지 헷갈리거나,  
자주 사용되는 훅을 디버깅할 때 유용하게 사용할 수 있다.

```jsx
import { useContext, useDebugValue, useState } from 'react'
import { ItemContext } from '../App'
import { Item } from './Item'
import './ItemList.css'

function useMyCustomHook() {
	const [isLogin, setIsLogin] = useState(false)
	useDebugValue(isLogin ? 'Login : true (debaug)' : 'Login : false (debug)')
	return isLogin
}

export const Debug = () => {
	const value = useContext(ItemContext)
	const isOnline = useMyCustomHook()
}
```

개발자 도구를 확인해보면 훅에 지정한 라벨이 삽입되어 있는 걸 알 수 있다.  
useDebugValue는 훅 안에서만 사용해야 작동하고, 그 외의 경우는 아무 동작도 하지 않는다는 걸 주의하자!  
가끔 디버깅이 필요한 훅에 useDebugValue를 잘 사용하면 꽤 유용할 것 같다.
