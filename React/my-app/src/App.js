import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

/* 
state 사용 시 Destructing 문법
let num = [1,2]; 배열로 보관해서 사용할 시, num이라는 변수에 보관을 함
배열안의 값으로 들어있는 걸 밖으로 빼내고 싶을 때, 
*/

function App() {
  return (
    <div className="App">
      <div className='black-nav'>
        <h4>Blog</h4>
      </div>
      <h4>권민지의 블로그</h4>
    </div>
  );
}

export default App;
