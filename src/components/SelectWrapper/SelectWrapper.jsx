import React, { Component } from 'react';
import Select from 'react-select';

const scaryAnimals = [
    { label: "Alligators", value: 1 },
    { label: "Crocodiles", value: 2 },
    { label: "Sharks", value: 3 },
    { label: "Small crocodiles", value: 4 },
    { label: "Smallest crocodiles", value: 5 },
    { label: "Snakes", value: 6 },
];

function SelectWrapper({ title }) {
    return (
        <div className="row">
            <h1>{ title || 'Select wrapper test' }</h1>
            <div className="col-md-offset-3 col-md-6">
                <Select options={scaryAnimals} />
            </div>
        </div>
    );
}

SelectWrapper.propTypes = {
    title: PropTypes.string
};

export default SelectWrapper;