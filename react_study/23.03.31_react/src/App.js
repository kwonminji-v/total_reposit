/* import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h2>Hello World 2</h2>
    </div>
  );
}

export default App;

 */

import {useState} from 'react'
import './App.css'

function App() {
  let [글제목, b] = useState('여자 바지 추천');
  let posts = '강남역 spa 브랜드'
  return (
    <div className="App">
      <div className="black-nav">
        <div>브랜드 list</div>
      </div>
      <div className="list">

      </div>
    </div>
  )
}
