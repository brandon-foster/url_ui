import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap-icons/font/bootstrap-icons.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
console.info(`This React app is running in ${process.env.NODE_ENV} mode.`);
if (process.env.NODE_ENV === 'development') {
  root.render(
    <App />
  );
}
else {
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}