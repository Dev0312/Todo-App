import React from 'react';



import TodoHome from '../TodoHome/todoHome';

import TodoContextProvider from './TodoContext/todoContext';

const Todo = () => {
    return ( 
        <TodoContextProvider>
            <TodoHome/>
        </TodoContextProvider>
        
     );
}
 
export default Todo;