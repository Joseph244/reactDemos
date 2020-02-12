import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Lifecycle from './Lifecycle';
import CartSample from './CartSample';

// 直接渲染
// ReactDOM.render(<h1>React真酷</h1>, document.querySelector('#root'))
// 组件渲染
// ReactDOM.render(<App/>, document.querySelector('#root'))


// ReactDOM.render(<Lifecycle/>, document.querySelector('#root'))
ReactDOM.render(<CartSample title="React购物车"/>, document.querySelector('#root'))


// 动态渲染
// function tick() {
    // ReactDOM.render(<h2>{new Date().toLocaleTimeString()}</h2>, document.querySelector('#root'))
// }
// setInterval(tick, 1000);