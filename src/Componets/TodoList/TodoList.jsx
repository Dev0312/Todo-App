import React, { useContext } from 'react';



import { Card, List } from 'antd';
import { todoContext } from '../Root/TodoContext/todoContext';
const TodoList = () => {


    const [Todo] = useContext(todoContext);


    return (
        <Card className='list-box'>
            <List bordered className='list-container'>
                {Todo ? Todo.map((i) => {
                    return (
                        <List.Item key={i.id} className='list-items'>
                            <h4>{i.todo}</h4>
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