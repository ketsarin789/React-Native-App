import React, { Component } from 'react';
import Directory from './DirectComponent';
import { TEA } from '../shared/tea';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tea: TEA
        };
    }

    render() {
        return <Directory tea ={this.state.tea} />;
    }
}

export default Main;