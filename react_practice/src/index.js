import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'
import reportWebVitals from './reportWebVitals';
import style from './css/index.module.css'
import { Provider } from 'react-redux';
// import App from './App'
import Header_JW from './component/header_jw'
import Detail_MJ from './component/detail_mj'
import { configureStore } from '@reduxjs/toolkit';
import detailList from './createSlice';
// import MenuDetail_MJ from './component/menu_detail_mj'

const root = ReactDOM.createRoot(document.getElementById('root'));

const store = configureStore({
  reducer: detailList
})


root.render(
  // store는 최상단 루트인 곳에서 Provider와 함께 사용해야 한다.
  <BrowserRouter>
    <Provider store={store}>
      <div className={style.container}>
        {/* <App /> */}
        <Header_JW />
        <Detail_MJ />
        {/* <MenuDetail_MJ /> */}
      </div>
    </Provider>
  </BrowserRouter>

);

reportWebVitals();
