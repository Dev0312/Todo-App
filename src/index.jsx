import React from 'react';
import ReactDOM from 'react-dom';

// ROOT COMPONENT
import Todo from './Componets/Root/TodoApp';
//CSS 
import 'antd/dist/antd.css';


ReactDOM.render(
    <React.StrictMode>
        <Todo/>
    </React.StrictMode>,
    document.getElementById('root')
);

