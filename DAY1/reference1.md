## 리액트 시작하기...전에 주접 떨기

방갑습니다!!!!!!!! 리액트를 시작하기 전에 앞서.......여러분이 너무 대견하ㅂ니다!!!!!!!!!!!  
아니글쎄 저는 타입스크립트를 8월달에 독학으로 배웠단 말이죠,, 그것도 아주ㅜ 어려웟는뎅,,,,  
그래서 사실 저도 타입스크립트를 어떻게 해야 잘 설명해줘야할까 하며 고민을 마ㅏㅏㅏㅏㅏㅏㅏㄴ이 햇담말이죠..  
뭐 물론 저는 고민만했고 타입스크립트 미션은 세원이가 90% 만들었답니다!^^  
그래서 제가 열씸히 리액트를 만들고잇답니다..

어쨌거나 이틀동안 저는 열분이 타입스크립트를 할수있을거라 생각햇씁니다.  
근데 만들고보니까 너무어렵더라고요ㅣ......>!!!!!!!!!! 그래서 너무먼누너무너무너ㅜㅁ미안해서...  
아니사실 예제도 엄청 쉽게설명해주고싶은데 자료도 몇개없고어려운거ㅓ야...글서 내가 직접 미션해보고 아니 이걸 ㅓ어케하농..? 생각햇ㅈㅣ.  
그리고니네 밤샛다매.......미안해....  
머쨋든그래서 걱정하면서 앗 이건 얘네 힘들면 바로 늘려줘야겟다 ! 생각하고잇ㄴ는데 아니 미션 제출기한보다 몇시간을 더빨리내더라구요!!  
얼마나 감동받앗던지....말로이룰수가업습니다ㅣ........그래서 허겁지겁 정처산기 공부하다가 새벽3시쯤에 정신ㄴ간상태로 코드리뷰를햇단ㅂ니다.  
ㅁ하지만 기분은 매우 좋앗어요.!!! 앞으로도 계속 열심히해봅시다!

타입스크립트는 사실 쉬우면서도 깊게 들어가면 매우 어려운 언어랍니다!! 제 주관적으론 제너릭을 얼마나 잘 이해하느냐에 따라  
얼마나 타입스크립트를 잘 알고 있는지 판단된다고 생각해요! 그런데 그 타입스크립트를 이틀만에 개념을 다 떼버린 여러분들ㄹ...  
이런 천재들..... 정말 대단ㄹ합니다!! 인서트 프론트의 미래가 밝습니다! 열분같은 후배를 뒀다는게 너무 뿌듯하고 기분이 좋네요!

한 날은 다른 반 제 친구가 저에게 말하길, "야 1학년에 벌써 타입스크립트하는애 있어!"라고 말하는거 있죠!  
그래서 제가 자랑스럽게 "그거 우리 딸들인데?" 대답했죠. 아이들은 "아 인서트야? 그래 내말이 맞다니까~"라며 이야기를 이어가더라구요.  
얼마나 뿌듯하던지,,, 자랑스러운 팀원들..!

칭찬할 점이 한 9999가지는 더 남았는데,,, 한번 넣어두고 강의를 시작해볼게요 열럴불들..!!!!, 그럼 이제 리액트를 시작해봅시다!!!  
오케이 이제 말투에 약빨 빼고, 제대로 가봅시다.

## 왜 리액트를 쓸까?

현재 전세계 개발자들은 자바스크립트에 뜨겁게 열광하고 있답니다.  
기존에 웹사이트는 HTML, CSS밖에 없어 정적인 웹사이트만을 만들 수 있었어요.  
그러다 브랜든 아이크라는 사람이 동적인 웹사이트를 만들기 위한 Mocha라는 언어를 10일만에 개발했답니다.  
Mocha는 몇 달 되지 않아 라이브스크립트라는 이름으로 개명이 되었고, 라이브스크립트에서 자바스크립트로 이름이 바꼈답니다.  
그 이유는 "그 당시 자바가 유명해서!! 히히"랍니다. 개발자 본인은 자바와 문법이 유사해서라고 하는데.. 누가봐도 아니죠?^^.

어쨌든 위에서 설명한 바와 같이, 자바스크립트가 처음 나올 때는 웹에서 간단한 연산이나 시각적 효과를 주기 위한 간단한 언어에 불과했어요.  
요즘은 자바스크립트를 이용해서 모바일 앱, 데스크톱 애플리케이션도 만들며, 심지어 어떤 경우엔 게임까지도 JS로 개발하기도 한답니다.

여러분이 알고 있는 비주얼 스튜디오 코드도 타입스크립트로 만들어진 것 알고 있나요? 다음 링크는 vscode의 레포지토리랍니다.  
https://github.com/microsoft/vscode

이 외에도 디스코드, 페이팔, 페이스북 등의 큰 애플리케이션도 자바스크립트를 이용해 개발이 되었답니다.  
그럼 이런 자바스크립트로 큰 서비스, 즉 애플리케이션을 작성하려면 여러분들의 경험상 순수 자바스크립트로는 약간 힘들겠죠?  
이때 순수 자바스크립트를 사람들은 "바닐라 자바스크립트"라고 한답니다.

그래서 이를 해결하기 위해 지금까지 수많은 프레임워크와 라이브러리들이 이를 해결하려고 노력했답니다.  
Angular, Backbone.js, Derby.js, Ember.js, Ext.js, Knockback.js, Sammy.js, PureMVC, Vue.js등 그 외 여러가지들이 말이죠!

이 프레임워크들은 MVC와 MVVM 아키텍처를 사용합니다.  
아직은 생소할 수 있는데, MVC와 MVVM에 대해 따로 알아보도록 하세요.  
개발자를 하며 꼭 필요한 개념이며, 이 개념을 잘 이해하면 질 좋은 코드를 짜고 에러를 미연에 방지할 수 있습니다.  
이와 같은 아키텍처의 공통점은 Model과 View가 있다는거에요.  
Model은 말그대로 사용할 수 있는 데이터를, View는 사용자에게 보여주는 것을 말합니다.  
만약 어떤 div에 들어있는 값을 1에서 2로 바꿔야한다면, 그 애플리케이션이 대규모일 경우 어디에 들어가서,, 어디에 들어가서,,  
작업 속도와 처리 시간도 길어지고 매우 복잡해지겠죠?

그래서 페이스북 개발팀은 하나를 생각해냈는데, 변화를 주는 것이 아닌 변화가 생기면 기존에 있던 View를 싹 날려버리고 다시 화면을 새로  
불러온다는 것이었죠. 이렇게하면 구조도 간단해지고, 코드양도 줄어들고, 변화를 어떻게 줄지 신경 쓸 필요도 없어집니다.

어때요, 그러나 한 가지 의문이 들지 않나요? 너무 느리지 않을까요?  
그래서 페이스북 개발팀이 앞서 말한 방식에서 성능을 아끼고 사용자 경험을 극대화 시키며 개발한 라이브러리가 바로 리액트랍니다.

## 렌더링

사용자 화면에 View를 보여주는 것을 렌더링이라고 말합니다. 그리고 위에서 말한 것처럼 변경을 통해 다시 렌더링하는 것을 리렌더링이라 하죠.  
렌더링은 먼저 문자열 형태의 HTML 코드로 코드를 변환하고, DOM에 내용을 주입해 이벤트가 적용되어 바뀐답니다.

과정은 다음과 같이 이루어집니다. 변화가 일어나면 새로운 DOM 트리와 기존 트리를 최소한의 연산으로 비교하고, 기존과 다른 값만 업데이트시키는 방식이랍니다.

<img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FSjw1C%2FbtrhBMKFIaQ%2FzSJrx0mIcjjvQQaVcEH8mk%2Fimg.png"/>

리액트에서는 이를 Virtual DOM이라는 개념을 사용해서 처리한답니다.  
새로 변화가 일어난 DOM을 Virtual DOM에 올리고, 비교한 다음 바꿔야할 값만 실제 Browser DOM에 바꿔 올리는거죠.

허나 DOM에 변화가 일어나면, 브라우저가 CSS를 다시 연산하고, 레이아웃을 구성하고, 페이지를 리페인트한답니다.  
만약 이런 브라우저 연산 횟수가 많아지면 렌더링 속도가 느려지는거겠죠? 실제로 연산할 때 시간을 많이 잡아먹는 요소 중 하나가 png파일의 크기 연산이랍니다.  
실제로 부마위키의 코드를 리팩토링할 때에, 이 로딩 속도를 완화하기 위해서 png 파일의 기본 규격을 정해주어 속도를 빠르게 만든 적도 있었어요.

그런데, 그렇다해서 꼭 Virtual DOM이 다 빠르진 않아요. 리액트 팀의 매뉴얼엔 다음 문장이 있습니다.

"우리는 다음 문제를 해결하려고 리액트를 만들었습니다. <b>지속적으로 데이터가 변화하는 대규모 애플리케이션 구축하기</b>"

따라서 리액트를 적절한 곳에 사용해야 진가를 발휘할 수 있답니다. 리액트를 사용하지 않아도 더 나은 성능을 보이는 유형의 애플리케이션도 있겠죠?

## 리액트는 프레임워크가 아니다

리액트는 앞에서 말한 MVC중 V인 View만 담당합니다. 라이브러리라는 뜻이죠. 다른 프레임워크는 API 핸들링과 데이터 모델링, 라우팅 등의  
기능을 내장하나 리액트는 뷰에 대한 것만 있는 라이브러리라, 다른 기능은 직접 구현하여 사용해야 한답니다.

하지만 걱정하진 마세요! 여러분의 대대대대대선배들이 만들어놓은 좋고 안정적인 라이브러리들이 있고, 우린 그 라이브러리들만 공부하여 사용하면 되니까요.  
프론트엔드를 계속 공부한다면, 새로운 라이브러리들을 골라먹으며 동료들과 "이야 이런 라이브러리가 있다고?"라며 대화하는 황금같은 시간을 가질 때가 많을거에요.

또 리액트는 다른 웹 프레임워크나 라이브러리와 혼용도 가능하답니다. React + Angular등의 여러가지를 혼용할 수 있어요. <del>다만안쓰는덴이유가있겟죠..??^^</del>  
리액트를 사용하는 이유와 동작 원리에 대해서 알아보았으니, 본격적으로 사용하기 위해 작업 설정을 reference2 파일에서 알아보겠습니다.
