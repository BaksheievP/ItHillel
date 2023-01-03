import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/common_css/normalize.css'
import '../src/common_css/skeleton.css'
import '../src/common_css/dark-theme.css'
import './index.css';


import App from './contact_list/components/App/App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

