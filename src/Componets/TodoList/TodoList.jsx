import React, { useContext } from 'react';



import { Card, List, message } from 'antd';
import { todoContext } from '../Root/TodoContext/todoContext';
const TodoList = () => {


    const [Todo,setTodo] = useContext(todoContext);


    const deleteTodo = (id) =>{

        setTimeout(() => {
       
            const delTodo = Todo.filter(i=>{
                return (
                    i.id !== id
                )
            });
            setTodo(delTodo)
            message.error('Todo Deleted')
        }, 1000);

    }

    return (
        <Card className='list-box'>
            <List bordered className='list-container'>
                {Todo.length ? Todo.map((i) => {
                    return (
                        <List.Item key={i.id} className='list-items' onClick={()=>deleteTodo(i.id)}>
                            <h4 >{i.todo}</h4>
                        </List.Item>
                    )
                }) :
                    <List.Item >
                        <h4>NO Todos !!!</h4>
                    </List.Item>}
            </List>
        </Card>
    );
}

export default TodoList;