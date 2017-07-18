import React from 'react';
import PropTypes from 'prop-types';
import {Col, Row} from 'react-bootstrap';

const PassionComponents = ({passionList}) => {
    let passionImgId = -1
    const passionElements = passionList.map(item => {
        passionImgId += 1
        return (
            <Row>
                <Col mdOffset={3} md={6} className="passionItems" key={item.name}>
                    {
                        passionImgId % 2 !== 0 ?
                        <img 
                            className="img-circle" 
                            src={item.img} 
                            style={{float:"right", marginLeft: "10%"}} 
                            alt="passion img"/>:
                        <img 
                            className="img-circle" 
                            src={item.img} 
                            style={{float:"left", marginRight: "10%"}} 
                            alt="passion img"/>
                    }
                    
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                </Col>
            </Row>
        );
    });
    return <div id="passionComp">{passionElements}</div>;
};

PassionComponents.propTypes = {
    passionList: PropTypes.array.isRequired
};

export default PassionComponents;