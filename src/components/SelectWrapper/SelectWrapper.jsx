import React, { Component } from 'react';
import Select from 'react-select';
import PropTypes from 'prop-types';

const defaultTitle = 'Select wrapper test';

const scaryAnimals = [
    { label: "Alligators", value: 1 },
    { label: "Crocodiles", value: 2 },
    { label: "Sharks", value: 3 },
    { label: "Small crocodiles", value: 4 },
    { label: "Smallest crocodiles", value: 5 },
    { label: "Snakes", value: 6 },
];

/** Select searchbox wrapper */
function SelectWrapper({ title }) {
    return (
        <div className="row">
            <h1>{ title || defaultTitle }</h1>
            <div className="col-md-offset-3 col-md-6">
                <Select options={scaryAnimals} />
            </div>
        </div>
    );
}

SelectWrapper.propTypes = {
    /** Title of the select */
    title: PropTypes.string
};
SelectWrapper.defaultProps = {
    title: defaultTitle
};

export default SelectWrapper;