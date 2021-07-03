import React, { useContext, useState } from 'react';


//EXTERNAL PACKAGES
import { v1 as uuidv1 } from 'uuid';

//CONTEXT
import { todoContext } from '../Root/TodoContext/todoContext';

//ANTD
import { Row, Col, Card, Form, Input, Button, message } from 'antd';


const TodoAdd = () => {

    const [Todo, setTodo] = useContext(todoContext)

    const [loading, setloading] = useState(false);


    const handleChange = (e) => {
 
        setTimeout(() => {
            e.target.reset()

        }, 1000);
    }

    const onFinish = (values) => {
        setloading(true)
        const todo = values.todo;
        setTimeout(() => {
            setTodo([...Todo,
            {
                id: uuidv1(),
                todo
            }])
            setloading(false)
            message.success('Todo Added')


        }, 1000);
    }

    const onFaild = (value) => {

    }

    return (
        <Card className="todoAddBox">
            <Form onFinish={onFinish} onFinishFailed={onFaild} onSubmitCapture={handleChange}>
                <Row className='todoAdd-contaier'>
                    <Col xs={24} sm={24} md={17} lg={17} xl={17} xxl={17} className='container-input'>
                        <Form.Item name='todo' rules={[{ required: true, message: "Please enter Todo" }]} >
                            
                            <input type="text" className='todo-input' autoComplete='off' />
                        </Form.Item>
                    </Col>
                    <Col xs={24} sm={24} md={7} lg={7} xl={7} xxl={7} className='container-btn'>
                        <Form.Item>
                            <Button loading={loading} type='primary' htmlType='submit' className='todo-btn'>Add Todo</Button>
                        </Form.Item>
                    </Col>
                </Row>
            </Form>

        </Card>
    );
}

export default TodoAdd;