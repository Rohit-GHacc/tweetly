import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Body from './components/Body';
import { Toaster } from 'react-hot-toast'
import { Provider } from 'react-redux'
import store from './redux/store';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Body />
      <Toaster />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vital
