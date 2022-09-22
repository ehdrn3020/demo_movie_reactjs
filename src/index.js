import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./styles.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
//  개발자 모드
//  <React.StrictMode>
    <App />
//  </React.StrictMode>
);

