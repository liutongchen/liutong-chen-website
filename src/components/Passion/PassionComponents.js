import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'react-bootstrap';

class PassionComponents extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let w = window,
            d = document,
            e = d.documentElement,
            g = d.getElementsByTagName('body')[0],
            x = w.innerWidth || e.clientWidth || g.clientWidth;
        const passionElements = this.props.passionList.map((item, index) => {
            return (
                <Row key={index}>
                    <Col mdOffset={3} md={6} className="passionItems" key={item.name}>
                        {   x <= 480 ? 
                                <a href={item.link} target="_blank">
                                    <img
                                        className="img-circle"
                                        src={item.img}
                                        style={{ float: "none" }} //no float
                                        alt="passion img" />
                                </a>:
                            index % 2 !== 0 ?
                                <a href={item.link} target="_blank">
                                    <img
                                        className="img-circle"
                                        src={item.img}
                                        style={{ float: "right", marginLeft: "10%" }} //float to right
                                        alt="passion img" />
                                </a>
                                :
                                <a href={item.link} target="_blank">
                                    <img
                                        className="img-circle"
                                        src={item.img}
                                        style={{ float: "left", marginRight: "10%" }} //float to left
                                        alt="passion img" />
                                </a>
                        }

                        <h3>{item.name}</h3>
                        <p>{item.description}</p>
                    </Col>
                </Row>
            );
        });
        return <div id="passionComp">{passionElements}</div>;
    }
}

PassionComponents.propTypes = {
    passionList: PropTypes.array.isRequired
};

export default PassionComponents;