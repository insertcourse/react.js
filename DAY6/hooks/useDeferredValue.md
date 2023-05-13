## useDeferredValue

useDeferredValue는 useTransition과 같이 우선순위를 지정하는 훅이다.  
useTransition는 함수를 지연시키는 반면, useDeferredValue는 업데이트를 지연시키는 훅이다.  
useMemo와 같은 훅과 같이 사용하면 더욱 효율적인데, 기존에 있던 값을 useMemo를 통해 메모이제이션 해오며  
지연을 시키는 최적화된 코드를 작성할 수 있다.

```jsx
const deferred = useDeferredValue()

const query = useMemo(() => <Components query={deferredQuery} />, [deferredQuery])
```
