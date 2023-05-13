## JSX 이해하기

JSX에 대해 이해해보겠습니다. JSX는 자바스크립트에서 HTML 태그를 사용하여 컴포넌트를 구성하는 것을 도와주는 문법이랍니다.  
다음과 같은 HTML이 있다고 가정해봅시다.

```HTML
<div>
    Hello <b>react</b>
</div>
```

이걸 React의 createElement속성으로 작성해볼게요.

```js
function App() {
	return React.createElement('div', null, 'Hello ', React.createElement('b', null, 'react'))
}
```

어떤가요? 가독성도 좋지 않고, 복잡하지 않나요?  
JSX는 다음 코드를 밑의 코드와 같이 표현할 수 있습니다.

```jsx
function App() {
	return (
		<div>
			Hello <b>react</b>
		</div>
	)
}
```

JSX를 사용하는 이유를 알겠나요? 정말 편하죠?  
이 편리한 JSX를 사용하기 위해 지켜야하는 규칙을 배워봅시다.

### 1. 부모 태그는 두 개 이상일 수 없다

무조건 제일 최상위를 감싸는 태그는 한 개여야 합니다. 두 개 이상이면 오류가 납니다.  
편리한 문법은 아니지만, 꼭 알고 있어야 합니다.

```jsx
// 에러 코드
const App = () => {
    return (
        <h1>Hi</h1>
        <h1>Hello</h1> {/* 에러 발생 */}
    )
}

// 고친 코드
const App = () => {
    return (
        <> {/* div코드를 상위로 쓰기 싫다면, fragment라는 이름의 빈 태그도 사용할 수 있습니다. */}
            <h1>Hi</h1>
            <h1>Hello</h1>
        </>
    )
}
```

### 2. 자바스크립트 표현식을 태그 내에서 사용할 수 있다.

이게 진짜 리액트의 꽃이라고 표현할 수 있습니다. "안녕, 인서트!"를 띄우는 코드를 바닐라JS와 React에서 각각 짜볼게요.

```html
<div>
	<h1 id="greeting">안녕,</h1>
</div>
```

```js
const name = '인서트'
const greeting = document.getElementById('greeting')

greeting.innerText = `안녕, ${name}!`
```

이런 코드를 한 파일 내에 모두 처리해봅시다.

```jsx
const App = () => {
	const name = '인서트'

	return (
		<div>
			<h1>안녕, {name}!</h1>
		</div>
	)
}
```

어떤가요?? 정말 편하지 않나요? 이렇게 HTML 태그 내에서 중괄호를 열어 변수를 표현할 수 있습니다.  
또 하나의 규칙을 봅시다.

### 3. if문 대신 삼항 연산자

JSX의 중괄호 표현식 내에는 if문은 사용할 수 없지만, 여러가지 함수나 다른 연산자는 사용할 수 있답니다.  
삼항 연산자를 통해 대상이 성인인지 알아보는 간단한 프로그램을 짜봅시다!

```jsx
const App = () => {
	const age = 19
	const isStudent = true

	return (
		<div>
			<div>{age > 19 ? <h1>당신은 성인입니다!</h1> : <h1>당신은 미성년자입니다!</h1>}</div>

			{/* 다음과 같이도 표현할 수 있습니다. */}
			<h1>{age > 19 ? '당신은 성인입니다!' : '당신은 미성년자입니다!'}</h1>

			{/* 어떤 값이 참이면 무언가를 보여줄때, 다음과 같이 우리가 배운 조건부 렌더링을 사용할 수 있습니다. */}
			{isStudent && <h1>학생입니다!</h1>}
		</div>
	)
}
```

정말 신기하지 않나요? 이게 리액트에요!! 혁신이라구요!!! 나머지도 알아봅시다!

### 4. undefined를 렌더링할 수 없다

```jsx
const App = () => {
	return undefined
}
```

undefined를 렌더링하거나 불러올 수 없습니다. 리액트를 사용할 때 가장 많이 발생하는 에러가 cannot read properties of undefined일거에요.  
허나 JSX 내부에선 undefined를 렌더링할 수 있답니다.

```jsx
const App = () => {
    const name = undefined
    return (
        <div>{name}</div>

        {/* 값이 undefined일 경우 파이프라인을 사용해 대체값을 보여줄 수도 있습니다. */}
        <div>{name || "값이 undefined입니다."}</div>
    )
}
```

### 5. 인라인스타일링

JSX에서 인라인스타일링을 할 때에는, 문자열 형식이 아닌 객체형식으로 작성해주며, 속성들은 카멜케이스를 사용해야합니다.

```jsx
const App = () => {
	const styleObj = {
		color: 'black',
		fontSize: '28px',
		fontWeight: 700,
	}

	return (
		<div>
			<h1 style={styleObj}></h1>
		</div>
	)
}
```

이를 선언이 아니라 직접 바로 객체로 넣을 수도 있습니다.

```jsx
const App = () => {
	return (
		<div>
			<h1
				style={{
					color: 'black',
					fontSize: '28px',
					fontWeight: 700,
				}}></h1>
		</div>
	)
}
```

약간 복잡하긴 하죠? 그렇기에 JS 값에 따라 스타일이 변경되는 로직이 아니라면 가급적이면 css파일에서 스타일링하길 바랍니다.

### 6. class 대신 className

JSX에서는 class가 예약어이기 때문에, className이라는 속성을 사용합니다.

```jsx
const App = () => {
	return (
		<div>
			<h1 id="greeting">Hello!</h1>
			<h1 className="introduce">I am ubin.</h1>
		</div>
	)
}
```

```css
#greeting {
	font-size: 22px;
	color: black;
}

.introduce {
	font-size: 18px;
	font-weight: 500;
}
```

HTML에서의 class와 똑같이 작동합니다.

### 7. 셀프 클로징 필수

JSX에서의 모든 태그는 꼭 무조건 닫혀야 합니다. JSX에서는 HTML과 다르게, 태그 내에 내용이 없다면 모든 태그를 셀프 클로징할 수 있습니다.

```jsx
const App = () => {
	return (
		<div>
			<div />
			<br />
			<img src=" " />
			<div>Hello</div>
			<hr />
			<input type="text" />
		</div>
	)
}
```

### 8. 주석 작성

주석은 중괄호를 열어 작성해야 합니다.

```jsx
const App = () => {
	return (
		<div>
			<h1>hello</h1>
			{/* 주석 */}
		</div>
	)
}
```

### 마무리

JSX에 대해서 알아봤는데, 어떤가요? 편한가요? 아직은 못 느낄 수 있지만, 점점 사용하며 JSX를 이용한 리액트가 얼마나 편한지 체감하게 될겁니다.  
이번 미션은 fruit라는 배열을 생성해, 각 배열마다 name과 price 속성이 들어있는 객체를 넣어 저번에 배운 map 속성을 통해 반복해봅시다.  
JSX에서는 map을 다음과 같이 사용할 수 있답니다.

```jsx
const App = () => {
	const ramens = ['너구리', '신라면', '오징어짬뽕']
	return (
		<div>
			{ramens.map((ramen) => {
				return <h1>{ramen}</h1>
			})}
			{/* <h1>너구리</h1> <h1>신라면</h1> <h1>오징어짬뽕</h1> 총 3개의 태그가 렌더링됩니다. */}
		</div>
	)
}
```

다음 예제를 활용하여 미션을 풀어보세요. 동일하게 리액트 앱에서 연습한 후, 동작하는 것을 확인하면 미션 파일로 복사하세요.
