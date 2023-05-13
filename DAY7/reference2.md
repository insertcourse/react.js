## 라우터를 이용한 SPA 개발하기

react-router-dom 라이브러리를 사용해서 페이지 기능을 개발해봅시다.  
먼저 프로젝트의 메인에서 터미널을 열어 다음 명령어를 실행해보세요!

```
$ yarn add react-router-dom
```

SPA는 Single Page Application의 약어로, 하나의 페이지만을 사용하고 불러오면서 사용자에게는 여러 페이지를  
불러오는 것 같이 보여주는 효율적인 어플리케이션 방식입니다. 저희는 이제부터 페이지를 만들어보겠습니다.  
페이지를 구성하기위해서는 BrowserRouter, Route 총 세 구성요소가 필요합니다.  
어떤 페이지에 어떤 컴포넌트를 보여줄지는 보통 App.js나 index.js같은 최상위 파일에서 설정한답니다.  
저희는 일반적으로 많이들 사용하는 App.js에서 라우터를 선언해보겠습니다.

```jsx
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home.tsx'
import About from './pages/About.tsx'

const App = () => {
	return (
		<Router>
			<Routes>
				<Route path={'/'} element={<Home />} /> {/* 메인페이지 */}
				<Route path={'/about'} element={<About />} /> {/* /about 페이지 */}
			</Routes>
		</Router>
	)
}

export default App
```

다음과 같이 App을 구성한 다음, 같은 위치에 pages 디렉터리를 만들어 Home과 About 컴포넌트를 생성해 간단히 구분할 수 있는 내용을 넣어줍시다.  
그런 다음, localhost로 서버를 열어 링크를 localhost:3000/about으로 바꾸고 출력이 잘 되나 확인해봅시다.  
출력이 잘 되나요?
페이지 내에서 다른 페이지로 이동하고 싶을 때는 Link 태그를 사용할 수 있습니다.

```jsx
import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
	return (
		<div>
			<h1>About page</h1>
			<Link to="/">돌아가기</Link>
		</div>
	)
}
```

Model단에서도 useNavigate라는 함수를 선언해 페이지를 변경시킬 수 있답니다.

```jsx
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
	const navigate = useNavigate()

	const onClickNavigateAboutPage = () => {
		alert('상세페이지로 이동합니다!')
		navigate('/about')
	}

	return (
		<div>
			<h1>Home Page</h1>
			<button onClick={onClickNavigateAboutPage}>상세페이지로</button>
		</div>
	)
}
```

그 외에도 여러가지의 라우터들을 구성할 수 있습니다.  
다음은 부마위키V1의 라우터 코드입니다.

```jsx
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

const App = () => {
	return (
		<Router>
			<Routes>
				<Route path={'/'} element={<R.Home />} /> {/* 메인 페이지 */}
				<Route path={'/student'} element={<R.Student />} /> {/* 학생 목록 페이지 */}
				<Route path={'/teacher'} element={<R.Teacher />} /> {/* 선생님 목록 페이지 */}
				<Route path={'/accident'} element={<R.Accident />} /> {/* 사건사고 목록 페이지 */}
				<Route path={'/club'} element={<R.Club />} /> {/* 동아리 목록 페이지 */}
				<Route path={'/frame'} element={<R.Frame />} /> {/* 틀 목록 페이지 */}
				<Route path={'/docs/:title'} element={<R.Docs />} /> {/* 문서 페이지 */}
				<Route path={'/search/:result'} element={<R.Search />} /> {/* 검색 결과 페이지 */}
				<Route path={'/oauth'} element={<R.Signup />} /> {/* 로그인 페이지 */}
				<Route path={'/create'} element={<R.Create />} /> {/* 문서 생성 페이지 */}
				<Route path={'/update/:title'} element={<R.Update />} /> {/* 문서 편집 페이지 */}
				<Route path={'/version/:title'} element={<R.Version />} /> {/* 버전 기록 페이지 */}
				<Route path={'/version/:title/detail/:versionId'} element={<R.VersionDetail />} /> {/* 각 버전 상세 페이지 */}
				<Route path={'/mypage'} element={<R.MyPage />} /> {/* 마이페이지 */}
				<Route path={'/user/:id'} element={<R.User />} /> {/* 유저 조회 페이지 */}
				<Route path={'*'} element={<R.NotFound />} /> {/* Not Found Error 페이지, path에 '*'을 넣어 표기함 */}
			</Routes>
		</Router>
	)
}

export default App
```

라우터에 콜론을 붙이고 이름을 적어주면, 그 위치에 있는 링크는 무엇이든 들어갈 수 있습니다.  
이것은 일단 제쳐두고, 나중에 알아보도록 합시다! 마지막 미션입니다!!

1. Scss를 사용하여 todolist 리팩토링하기
2. 타입스크립트 프로젝트로 새로 생성해 todolist 관련 js 파일들을 싹 tsx파일로 바꾼 후, 알맞게 타입 지정해주기
3. router를 사용하여 /todolist에 들어가면 앞서 구현한 투두리스트를, 메인 페이지에는 기본적인 간단한 소개 페이지가 보이게 해주기

이렇게 미션이 끝났습니다!!! 화이팅!!!!
