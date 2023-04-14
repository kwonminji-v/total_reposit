import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route} from 'react-router-dom';

function Home() {
  return (
    <div>
      <h2>Home</h2>
      Home...
    </div>
  )
}

function Topics() {
  return (
    <div>
      <h2>Topics</h2>
      Topics...
    </div>
  )
}

function Contact() {
  return (
    <div>
      <h2>Contact</h2>
      Contact...
    </div>
  )
}


function  App() {
  return (
    <div>
      <h1>Hello React Router DOM</h1>
      <ul>
        <li><a href="/">HOME</a></li>
        <li><a href="/topics">Topics</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
        // <Route path="/"><Home></Home></Route>
        // <Route path="/topics"><Topics></Topics></Route>
        // <Route path="/contact"><Contact></Contact></Route>   
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

/* URL에 따라서 달라저야 하는데, home,topics,contact가 요소들을 라우트로 감싸준다.
사용자가 해당 웹사이트에 아무런 패스도 지정하지 않고 들어왔을때는 HOME 컴포넌트를 사용자에게 보내주고
topics라는 URL로 들어오면 사용자를 TOPICS라는 컴포넌트를 사용자에게 라우팅 해준다. */