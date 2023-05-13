## 이벤트 핸들링

<small><del style="color: gray;">와진짜이챕터미션만드는게제일힘들ㅇ어자살하고싶다진짛하게</del></small>

반갑습니다!!! 이번엔 리액트의 이벤트 시스템에 대해 알아봅시다!  
사용자가 웹 브라우저에서 DOM 요소들과 상호 작용하는 것을 이벤트라고 한답니다.  
버튼을 클릭할 땐 onClick, input태그에 값을 입력할땐 onChange등의 이벤트들이 실행되죠.

리액트의 이벤트 시스템도 HTML의 이벤트와 인터페이스가 사용법이 비슷합니다. 우리 onClick은 저번과제에서 많이 했었죠?  
예제로 이벤트 핸들링을 익혀보겠습니다. 실습할 단계는 다음과 같습니다.

```
컴포넌트 생성 및 불러오기
onChange 이벤트 핸들링하기
state에 input값 담기
```

바ㅏㅏ로레츠고.

### 컴포넌트 생성

먼저 EventPractice라는 컴포넌트를 생성하고. div를 감싸 h1에 "이벤트 연습"이라고 적어준 후,  
App.js에서 import해 화면에 띄워봅시다.

### onChange 이벤트 핸들링하기

onChange 이벤트를 핸들링해보겠습니다. input 요소의 값이 바뀔 떄마다 onChange 이벤트가 실행된답니다.  
이벤트가 실행될 때마다 이벤트를 콘솔에 출력해볼게요.

```jsx
const EventPractice = () => {
	const onChangeOutputConsole = (e) => {
		console.log(e.target.value)
	}

	return (
		<div>
			<h1>이벤트 연습</h1>
			<input type="text" name="message" placeholder="아무거나 입력해 보세요" onChange={onChangeOutputConsole} />
			{/* 짧은 로직이라면 밑와 같이 익명 화살표 함수를 사용해 표현해줄 수도 있습니다. */}
			<input type="text" name="message" placeholder="아무거나 입력해 보세요" onChange={(e) => console.log(e.target.value)} />
		</div>
	)
}
```

코드를 저장하고, 웹 브라우저에서 개발자 도구를 열어 console 탭을 켜보세요.  
그리고 input태그의 값을 바꿔보고 콘솔이 뜨는지 확인해보세요. 바뀌는게 잘 보이나요?  
e.target이라는 속성은 html tag 자체를 의미합니다. 이벤트 속성에 대해 잘 알고 있다면 다양한 기능들을 구현할 수 있는 스펙트럼이 넓어집니다.

### state에 input값 담기

state에 input값을 담으면 View단만이 아닌 Model단에서도 실시간으로 값이 변화될 때마다 값을 변경할 수 있습니다.  
방법은 약간 어려울 수 있답니다. input의 value를 state값으로 지정하면, input value가 state에 연결이 되겠죠?  
그 상태에서 onChange 이벤트가 실행될 때마다 사용자가 입력한 값을 state에 넣어준다면, state도 input value에 연결이 될겁니다.  
이런 식으로 구현을 하는 예제를 하나 보겠습니다!

```jsx
const EventPractice = () => {
	const [message, setMessage] = React.useState('')

	const onChangeSetMessage = (e) => {
		setMessage(e.target.value)
	}

	return (
		<div>
			<h1>이벤트 연습</h1>
			<input type="text" name="message" placeholder="아무거나 입력해 보세요" onChange={onChangeSetMessage} value={message} />
			{/* 짧은 로직이라면 밑와 같이 익명 화살표 함수를 사용해 표현해줄 수도 있습니다. */}
			<input type="text" name="message" placeholder="아무거나 입력해 보세요" onChange={(e) => setMessage(e.target.value)} value={message} />
		</div>
	)
}
```

이벤트에 대해 이해가 잘 되나요? 값이 실시간으로 변동되는지 확인하려면, state를 하나 View단에 렌더링시켜주면 확인할 수 있답니다.

```jsx
const EventPractice = () => {
	const [message, setMessage] = React.useState('')

	const onChangeSetMessage = (e) => {
		setMessage(e.target.value)
	}

	return (
		<div>
			<h1>이벤트 연습</h1>
			<input type="text" name="message" placeholder="아무거나 입력해 보세요" onChange={onChangeSetMessage} value={message} />
			<h1>{message}</h1>
		</div>
	)
}
```

어떤가요, 확인이 잘 되었나요? 약간 어려울 수 있지만, 실제 부마위키의 문서 편집 로직 코드중 일부를 그대로 가지고 와볼게요.

```tsx
const Update = () => {
	const [docs, setDocs] = React.useState<UpdateDocsType>({
		title: defaultDocs.title,
		contents: decodeContents(defaultDocs.contents || ''),
	})

	return (
		<div>
			<textarea
				onKeyDown={(e) => util.onKeyDownUseTab(e)} {/* 키보드를 눌렀을 때마다 이벤트를 감지해 탭 키를 사용할 수 있게 해주는 로직 */}
                {/* onChange가 될 때마다 contents값을 바꿔주는 로직 */}
				onChange={(e) => setDocs({ ...docs, contents: e.target.value })}

                {/* value는 contents로 지정해서 서로 연결 후 Model과 View 양방향 통신!! */}
				value={decodeContents(docs.contents || '')}
			/>
		</div>
	)
}
```

코드가 많이 어려울 수 있답니다. 이 부마위키의 일부 코드와 비슷한 미션을 드릴게요!  
바로 간단한 자기소개를 하는 페이지를 만들겁니다. 스타일링 필요 없습니다! 미리 템플릿을 드릴게요.

```jsx
const Introduce = () => {
	return (
		<div>
			<div>
				<input type="text" name="name" />
				<input type="text" name="age" />
				<input type="text" name="hobby" />
			</div>
			<div>
				<h1>안녕하세요! 제 이름은 {}입니다.</h1>
				<h1>제 나이는 {}살입니다.</h1>
				<h1>취미는 {}입니다.</h1>
			</div>
		</div>
	)
}
```

다음과 같은 템플릿에서 예제를 작성해보세요. state와 input을 value와 onchange로 연결하도록 하고, name과 age, hobby를  
introduce라는 state 한 개에 객체로 한번에 다 집어넣어 관리하도록 합니다.  
그런데 만약 이렇게 되면 name을 입력할 때, age와 hobby 등의 나머지 속성은 가만히 있어야겠죠?  
힌트는 이 때 전개연산자 (Spread Operator)를 사용하여 코드의 양을 대폭 줄일 수 있습니다. 한번 따로 공부후 사용해보세요.  
그리고 이번엔 특별하게 타입스크립트로 리액트를 작성해봅시다. 타입스크립트 리액트를 사용하려면 새로운 프로젝트를 작성해야합니다.  
콘솔을 켜 다음과 같이 입력해보세요.

```
$ yarn create react-app 프로젝트명 --template typescript
```

그 다음, 여기서 코드를 작성해봅시다. 힌트는 ChangeEvent와 그의 제너릭에 이에 맞는 Element를 넣어야 작동할겁니다!! 모르겠음 질문하세용!  
추가적으로 병을 줬으니 약도 줘야겠죠..?? Reactjs code snippets가 어떤 날먹 기능을 하는지 알아보겠습니다!  
Introduce 파일을 프로젝트 폴더에서 만든 다음, rsc를 입력하면 자동완성이 뜨는데, 엔터를 눌러보세요. 자동으로 컴포넌트의 기본형식이 완성이 된답니다.  
정말 편리하고 시간을 단축해주는 기능이라서 저도 유용하게 사용하고 있답니다. 앞으로는 이 기능을 사용해 컴포넌트나 페이지를 만들도록 하세요!  
DAY4부터 미션의 난이도가 훅 올라간 것 같네요. 이번 주도 화이팅!!
