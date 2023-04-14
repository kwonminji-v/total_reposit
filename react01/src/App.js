/*eslint-disable*/
//주석은 ESLint 규칙을 일시적으로 비활성화하는 방법이다.
import logo from './logo.svg';
import './App.css';

function App() {
  let post = '아자차카타파하'
  return (
    <div className="App">
      <div className='black-nav'>
        <div>가나다라마바사</div>
      </div>
        <div className='list'>
          <h4>글 제목</h4>
          <p>2월 29일 발행</p>
        </div>
    </div>
  );
}
/* 
1. 맨 윗줄에 import {useState} from 'react' 하고 훅 이라고도 한다. useXXXX
2. 원하는 곳에서 useState('보관할 자료) 쓰면 state에 자료를 잠깐 저장할 수 있다.
그리고 저장한 자료를 나중에 쓰고 싶으면 
3. let[a,b] = useState('남자 코트 추천');
   a 자리에 state 이름을 자유롭게 작명한 다음 나중에 자유롭게 사용하면 된다. */
export default App;


//JSX 문법 1. html에 class 넣을 땐 className
//JSX 문법 2. { }에 변수를 작성하면 할당됨 html에 넣고싶을 때 {중괄호}
//html에 꽂아넣는 작업을 데이터 바인딩이라고 한다.
//JSX 문법 3.<div style = {{color: 'red', fontSize : '30px'}} JSX 상에서는 style = { } 안에 {} 자료형으로 집어넣어야 한다. 




/* 
Yarn을 사용하려면, 공식 웹사이트(https://yarnpkg.com/)에서 설치 지침을 확인하세요.

create-react-app 설치: create-react-app은 리액트 프로젝트를 쉽게 시작할 수 있는 도구입니다. 
전역으로 설치하려면, 터미널에서 다음 명령어를 실행하세요.

c:\react01\npx create-react-app my-app

create-react-app my-app
cd my-app
npm start
이 명령어를 실행하면 브라우저에서 개발 서버가 열립니다. 기본 주소는 http://localhost:3000 입니다.

npm init  
npm i  모듈설치  다시 설치하고 싶을 때에는

node -v
npm -v
npm init -y  초기 설정 한 번에 yes

- project(app.js, module 폴더, package.json)는 보통 아래와 같이 구성됩니다.
    1. 실행파일(보통 app.js)
    2. module 폴더 (npm install 라이브러리_이름, 일반적으로 github에 올릴 때에는 삭제하고 올림, npm i로 package.json으로 설치할 수 있습니다.)
    3. package.json (npm init으로 생성, 라이브러리 설치될 때마다 update, package version 명시)

npm install <패키지명> or npm i <패키지명> : 설치
npm uninstall <패키지명> : 삭제

### 1. 사용자 인터페이스 ( 화면, 버튼 등 )을 쉽게 만들기 위함
리액트는 `SPA`( Single Page Application: 서버에서 제공하는 페이지가 한 개( html파일이 한 개라는 뜻 )이며,
로딩을 한 번 하고난 후에는 브라우저 내에서 나머지 페이지들을 정의하여 보여준다.

이로 인해 화면 전환 시 화면이 깜박이는거 없이 자연스럽게 넘어간다. -> 페이지 로딩되는 느낌없이 자연스럽게 넘어간다. ) 
를 사용하기 때문에 “사용자 경험”이 좋다.
웹보다는 앱에서 “사용자 경험”이 더 좋은 편인데, 리액트를 사용함으로써 앱같은 경험을 웹에서 제공할 수 있다.




React 애플리케이션에서 index.js와 App.js 파일은 다음과 같은 순서로 로드됩니다.

index.html 파일이 먼저 로드되고, 그 안에 정의된 Javascript 번들 파일(일반적으로 main.<hash>.chunk.js와 같은 이름)을 로드합니다. 
번들 파일은 index.js를 포함하고 있으며, 이 파일이 로드되고 실행됩니다. 
index.js는 React 애플리케이션의 진입점이며, 이 파일에서 ReactDom.render() 함수를 사용하여 App 컴포넌트를 DOM에 마운트 합니다.
App.js는 index.js에서 import되어 사용되므로, index.js가 로드되고 실행되는 과정에서 App.js도 로드되고 실행됩니다.
App.js는 애플리케이션의 최상위 컴포넌트로, 애플리케이션의 기본 구조와 다른 하위 컴포넌트를 포함하비다.
따라서, index.html이 먼저 로드되고 난 후에 index.js가 로드 되며, index.js에서 App.js를 import하여 애플리케이션의 최상위 컴포넌트를 로드하고 실행합니다.
 */
