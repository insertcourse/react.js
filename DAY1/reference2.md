## 작업 환경 설정하기

리액트 프로젝트는 저번에 타입스크립트 과제를 하며 설치한 node와 npm으로 생성한답니다.  
npm의 개념에 대해 알고있나요? npm은 웹사이트로 봤을 때 라이브러리 저장소라고 생각하면 편해요.  
https://npmjs.com
위의 링크에서 라이브러리들을 찾아볼 수 있답니다. 라이브러리들을 여기에 올리면, 명령어를 통해 라이브러리를 꺼내 쓸 수 있어요.  
만약 BSSM이라는 라이브러리를 퍼블리싱했다고 생각해볼게요.

```
라이브러리 개발자 :
$ npm publish BSSM // 실제 명령어가 이 것과 똑같진 않습니다. 퍼블리싱 되었다고 가정해볼게요!
```

그러면 다른 개발자들이 이 라이브러리를 설치하여 해당 프로젝트에 사용할 수 있답니다.

```
라이브러리 사용자 :
$ npm install BSSM
```

react도 다음과 같은 형식으로 npm에 올라와있답니다.  
npm은 install뿐만이 아니라 update나 다른 여러가지의 패키지를 관리해주어, 패키지 매니저라고 부릅니다.  
npm이라는 이름도 node package manager의 약어에요.

## yarn

제가 매우 사랑하는 yarn에 대해 알아볼게요. yarn도 똑같이 패키지 매니저랍니다.  
허나 npm을 사용하여 리액트를 쓸 때, 패키지의 내용이 담겨있는 package-lock.json이라는 파일이 생긴답니다.  
허나 이 파일은 꼬일 위험이 있고... 그리고 안이쁘구.....쨌든...여러가지 이유가 있답니다.

그래서 사용하는게 yarn이라는 패키지 매니저에요. yarn의 장점은 다음과 같아요.

1. 이쁘다.
2. 예쁘다.
3. 이뿌다.
4. 예뿌다.

네 그냥 npm을 쓰냐 yarn을 쓰냐는 취향 차이랍니다^^.. 하지만 너넨 yarn을 써야해. 난 npm을 싫어하기 때문이야. npm쓰면 내가 꼽줄거야.  
yarn을 사용하면 package-lock.json 대신 yarn.lock이라는 파일이 생긴답니다. 이 파일은 충돌이 잘 일어나지 않아요.

본격적으로 yarn을 설치해봅시다.

```
$ npm install --global yarn
$ yarn --version
```

버전이 잘 보이나요? 잘 되었다면 VSCode에서 다음과 같은 익스텐션을 추가적으로 설치합시다.  
ESLint: 자바스크립트 문법 및 코드 스타일을 검사해주는 도구입니다.  
Reactjs Code Snippets: 코드를 간편히 생성하는 코드 스니펫입니다. 사용법은 나중에 알려줄게요!

그리고 저번에 설치한 프리티어가 저장했을 때 코드를 정리하는지 등 잘 작동하는지도 확인해주세요.

여러분들은 노드와 VSCode, git이 미리 깔려있어 환경설정할 요소들이 많이 없답니다.  
그럼 바로 프로젝트를 생성해봅시다.

터미널에서 원하는 디렉터리 ( Desktop을 추천 )에 들어가서 프로젝트를 생성해봅시다.

## create react app으로 프로젝트 생성하기

명령어를 사용하는 법은 간단해요. 다음과 같이 입력해보세요.  
참고로 프로젝트명에 대문자는 들어갈 수 없다는 것을 꼭꼭꼭꼭 유의하세요.

```
$ yarn create react-app 프로젝트명
```

```
Success! Created aa at /Users/ubin/aa
Inside that directory, you can run several commands:

  yarn start
    Starts the development server.

  yarn build
    Bundles the app into static files for production.

  yarn test
    Starts the test runner.

  yarn eject
    Removes this tool and copies build dependencies, configuration files
    and scripts into the app directory. If you do this, you can’t go back!

We suggest that you begin by typing:

  cd aa
  yarn start

Happy hacking!
✨  Done in 35.32s.
```

성공했다면 다음과 같은 화면이 뜰거에요. 성공했다면, VSCode로 프로젝트를 열어보세요.  
여러가지 파일이 보이나요? 간단히 파일들을 알아봅시다.

- node_modules/ : 리액트를 사용하는 데 필요한 모듈이나 파일, 라이브러리들이 모여있습니다. 환경변수설정 외에는 건드리지 않는게 좋습니다.
- public/ : 앱을 컴파일할 때 필요하지 않은 모든 파일들을 모아둔 디렉터리입니다. 사진은 꼭 public 폴더 내에 저장해야 핸들링이 편합니다.
- public/index.html : JS로 작성한 파일들이 스크립트를 통해 저장되는 루트입니다. 파일 내에 \<div id="root">\</div> 태그가 보이나요?
- public/manifest.json : 앱에 대한 정보를 담고있는 JSON 형식 파일입니다.
- public/robots.txt : 웹 크롤러 등의 로봇이 웹사이트를 수집할 때 규칙을 정해주는 파일입니다.
- src/ : 앱을 컴파일할 때 필요한 모든 파일들을 모아둔 디렉터리입니다.
- App.css : App.js를 스타일링하는 파일입니다. App.js의 2번줄에서 import하여 연결합니다.
- App.js : 프로젝트의 메인 컴포넌트입니다. 기본 파일 내용들이 담겨 있습니다.
- App.test.js : 컴포넌트를 테스트하는 파일입니다.
- index.css : index.js를 스타일링하는 파일로, 보통 프로젝트 스타일을 초기화하는 코드가 들어갑니다. index.js의 3번줄에서 import하여 연결합니다.
- reportWebVitals.js : 앱의 퍼포먼스 타임들을 분석하는 파일입니다.
- setupTests.js : 테스트를 진행하기 위한 파일로, 기본적으로 jest라는 테스팅 라이브러리가 import 되어있습니다.
- .gitignore : 커밋할 때 깃허브에 올리고싶지 않은 디렉터리나 파일들을 정의하는 파일입니다. gitignore안에 원하는 대상을 작성하면 그 파일은 제외하고 커밋됩니다.
- package.json : 리액트 프로젝트를 구성하고 있는 정보를 담은 제일 중요한 설정 파일입니다.
- yarn.lock : 다운받은 라이브러리나 모듈들의 패키지 정보가 자세하게 서술되어있는 파일입니다. 깃허브에는 커밋하지 않습니다.

다음과 같은 파일들로 리액트를 사용할 수 있답니다. 조금 어색하나요?  
명령어들만 하나씩 다 사용해보고 DAY1을 끝냅시다!!  
package.json의 scripts가 정의되어있는 줄을 확인해보세요. 4개의 명령어가 있을 겁니다. 보이나요?  
먼저 start를 해봅시다. 터미널에 다음과 같이 yarn 키워드를 사용하여 스크립트를 실행할 수 있습니다.

```
$ yarn start
```

yarn start를 하면 3000번 포트에서 웹이 실행됩니다.  
http://localhost:3000을 확인해보면 리액트 앱이 뜰거에요. 리액트 앱을 서버를 켠 상태에서 수정해볼까요?  
App.js에 들어가서, 파일을 다음과 같이 바꿔보세요.

```jsx
import React from 'react'
import './App.css'

const App = () => {
	return (
		<div>
			<h1>Hello insert!</h1>
		</div>
	)
}

export default App
```

바꾸고 저장해본다음, localhost:3000에 다시 들어가보세요. 따로 새로고침을 하지 않아도 렌더링이 바로바로 반영된답니다.  
이를 핫 리로딩이라고 합니다. 다음은 build에 대해 알아봅시다.

yarn build는 리액트로 만든 웹을 배포할 때, index.html과 css, 바닐라 js로 바꾸어주는 명령어입니다.

yarn test는 프로젝트 내 작성한 모든 test코드를 실행시키는 명령어입니다.

yarn eject는 현재 리로딩 방식을 웹팩으로 바꿔주는 명령어입니다. 다음에 웹팩을 공부할 때 사용해보도록 합시다.

어떤가요, 흥미롭지 않나요? 리액트의 매력은 이뿐만이 아니라, 훨씬훨씬 많답니다. DAY2에서 더 알아보는걸로 하고, 미션1을 풀어봅시다!  
App.js의 return문 안에서 간단하게 아무 HTML이나 짠 다음, App.css에서 스타일을 입혀보세요. 정말 의미없는 아무 HTML이어도 괜찮으며,  
딱 태그 4개 이상만 사용해봅시다!! 리액트 앱에서 실행 결과를 본 다음, 미션 파일 내에 있는 파일에 코드의 내용만 복사하여 올리도록 합니다.
