import React from 'react';
import PropTypes from 'prop-types';

const PassionComponents = ({passionList}) => {
    const passionElements = passionList.map(item => {
        return (
            <div className="passionItems" key={item.name}>
                <img src={item.img} alt="passion img"/>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
            </div>
        );
    });
    return <div id="passionComp">{passionElements}</div>
}

PassionComponents.propTypes = {
    passionList: PropTypes.array.isRequired
}

export default PassionComponents;