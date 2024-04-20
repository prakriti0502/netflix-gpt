import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* Because of this strict mode, many things in our app happens twice, like api call, or any event etc.
    if you console the api response, you see it twice.
    But this is only restriced to our local.
    Reason behind this is: React does extra rendering of your component to check for some inconsistencies b/w the calls
    And it throws an error if there is any inconsistency in the rendering cycle. */}
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
