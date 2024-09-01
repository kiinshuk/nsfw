import React from 'react';
import ReactDOM from 'react-dom/client';
import Site from './Site';
// import Games from './Games';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Site/>
    {/* <Games/> */}
  </React.StrictMode>
);
