import React from 'react';

import {Row,Col ,Layout} from 'antd';
const {Header} = Layout;

const Todoheader = () => {
    return ( 
        <Row>
            <Col span={24}>
                <Header className='header'>
                    <h1 id='head-txt'>Todo App</h1>
                </Header>
            </Col>
        </Row>
     );
}
 
export default Todoheader;