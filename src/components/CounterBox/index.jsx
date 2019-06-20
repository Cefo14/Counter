import React from 'react';
import PropTypes from 'prop-types';
import './CounterBox.css';

const CounterBox = ({ label, value }) => (
    <div className="counter-box">
        <div className="counter-box__value">
            { value }
        </div>
        <div className="counter-box__label">
            { label }
        </div>
    </div>
);

CounterBox.propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
};

export default CounterBox;
