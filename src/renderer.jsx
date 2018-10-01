import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import SelectWrapper from "./components/selectWrapper";

class Renderer extends Component {
//     state = {  }
    render() { 
        return ( 
          <SelectWrapper />
        );
    }
}

export default Renderer;

ReactDOM.render(<Renderer />, document.getElementById('root'));