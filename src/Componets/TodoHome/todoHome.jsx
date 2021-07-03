import React from 'react';


// COMPONENTS
import Todoheader from '../header/header';
import TodoAdd from '../TodoAdd/todoAdd';
import TodoList from '../TodoList/TodoList';
import Todofooter from '../Footer/footer';

// CSS
import '../../Styles/styles.css';

//ANTD
import { Row, Col, Layout } from 'antd';
const { Content } = Layout;


const TodoHome = () => {
    return (
        <Row>
            <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24} className='todo-header'>
                <Todoheader/>
            </Col>
            <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24} className='todo-container'>
                <Content>
                    <Row className='container-box'>
                        <Col xs={24} sm={24} md={18} lg={12} xl={12} xxl={12}    className='box-input'>
                            <TodoAdd/>
                        </Col>
                        <Col xs={24} sm={24} md={24} lg={24}  xl={24} xxl={24} className='box-list' >
                            <TodoList/>
                        </Col>
                    </Row>
                </Content>
            </Col>
            <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24} className='todo-footer'>
                <Todofooter/>
            </Col>
        </Row>
    );
}

export default TodoHome;

