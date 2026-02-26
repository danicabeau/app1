import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css'; // เพิ่มการนำเข้า Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // เพิ่มการนำเข้า Bootstrap JS (ถ้าต้องการใช้ฟีเจอร์ที่ต้องใช้ JavaScript ของ Bootstrap)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
