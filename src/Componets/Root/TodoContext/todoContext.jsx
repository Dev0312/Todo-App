import React, {  createContext,  useState } from 'react';


export const todoContext = createContext();



const TodoContextProvider = ({children}) => {
   
    const [Todo, setTodo] = useState('');

    return (  
        <todoContext.Provider value={[Todo,setTodo]}>
            {children}
        </todoContext.Provider>
    );
}
 
export default TodoContextProvider;