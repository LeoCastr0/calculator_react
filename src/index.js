import React from 'react';
import "./index.css";
import ReactDOM from 'react-dom/client';
import { Calculator } from "./main/Calculator";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <div>
          <h1>Calculator</h1>
          <Calculator />
      </div>
  </React.StrictMode>
);