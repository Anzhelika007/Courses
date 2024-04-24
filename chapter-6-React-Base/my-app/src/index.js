import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

//const elem = <h2>Hello world!</h2>; // babel

const elem = React.createElement('h2', {className: 'greeting'}, 'Hello world!');

const element = {
  type: 'h1',
  props: {
    className: 'greeting',
    children: 'Привет, мир!'
  }
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  elem,

);

