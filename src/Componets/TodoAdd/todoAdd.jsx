import React, { useContext, useState } from 'react';

import { v1 as uuidv1 } from 'uuid';


import { Row, Col, Card, Form, Input, Button, message } from 'antd';
import { todoContext } from '../Root/TodoContext/todoContext';




const TodoAdd = () => {

    const [Todo, setTodo] = useContext(todoContext)

    const [loading, setloading] = useState(false);


    const handleChange = (e) => {
        setTimeout(() => {
            e.target.reset()

        }, 2000);

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


        }, 2000);
    }

    const onFaild = (value) => {

    }

    return (
        <Card className="todoAddBox">
            <Form onFinish={onFinish} onFinishFailed={onFaild} onSubmitCapture={handleChange}>
                <Row className='todoAdd-contaier'>
                    <Col xs={24} sm={24} md={17} lg={17} xl={17} xxl={17} className='container-input'>
                        <Form.Item name='todo' rules={[{ required: true, message: "Please enter Todo" }]} >
                            <Input className='todo-input' id='inp' />
                        </Form.Item>
                    </Col>
                    <Col xs={24} sm={24} md={7} lg={7} xl={7} xxl={7} className='container-btn'>
                        <Form.Item>
                            <Button loading={loading} type='primary' htmlType='submit' className='todo-btn'>Add Todo</Button>
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
            {/* <Form onFinish={onFinish} onFinishFailed={onFaild} onSubmitCapture={handleChange}>
                <Row className='test1'>
                    <Col xs={24} sm={24} md={17} lg={17} xl={17} xxl={17} className="test2">
                        <Form.Item name='todo' rules={[{ required: true, message: "Please enter Todo" }]} >
                            <Input className='todo-input' id='inp' />
                        </Form.Item>
                    </Col>
                    <Col xs={24} sm={24} md={7} lg={7} xl={7} xxl={7} className='test3' >
                        <Form.Item>
                            <Button loading={loading} type='primary' htmlType='submit' className='todo-btn'>Add Todo</Button>
                        </Form.Item>
                    </Col>
                </Row>
            </Form> */}
        </Card>
    );
}

export default TodoAdd;