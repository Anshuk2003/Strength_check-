import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';

//this root serve as entry point for rendering react application
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

