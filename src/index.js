import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import LoginComponent from './Components/ClassComponent/LoginComponent';
import Login from './Login form/Login';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <Login></Login>
  </div>
);  

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
