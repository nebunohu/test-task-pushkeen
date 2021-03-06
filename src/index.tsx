import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from './sevices/store';
import App from './components/app/app';
import reportWebVitals from './reportWebVitals';
import './index.css';

const container = document.getElementById('root')!;
const root = createRoot(container);
const baseName = process.env.NODE_ENV !== 'development' ? '/test-task-pushkeen' : '/';

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router basename={baseName}>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
