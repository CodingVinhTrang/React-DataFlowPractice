import React from 'react';
import ReactDom from 'react-dom';
import App from './App.js'

let root = ReactDom.createRoot(document.getElementById('root'))

root.render (
    <div className = "container-fluid">
            <App />
    </div>

)