import React from 'react';

import { Row, Col } from 'antd';

const Todofooter = () => {
    return ( 
        <Row className='footer-container'>
            <Col xs={24} sm={24} md={18} lg={18} xl={18} xxl={18} className='copy'>
                <h1>Todo App</h1>
            </Col>
        </Row>
     );
}
 
export default Todofooter;