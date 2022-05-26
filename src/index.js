import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import "@fortawesome/fontawesome-free/css/all.css";
import AppRouter from './Components/AppRouter';
import Login from './Components/LoginForm';


const RootElement = ReactDOM.createRoot(document.querySelector("#root"));
// RootElement.render(<App/>); //as variable
RootElement.render(<Login/>);
// RootElement.render(<AppRouter/>);

