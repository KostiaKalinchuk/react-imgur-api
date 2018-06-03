import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';



//
// import "./css/reset.css";
// import "./css/framework.css";
// import "./css/app.css";

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
