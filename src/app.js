import './style.sass';
import 'jquery';
import 'popper.js';
import 'bootstrap';
import 'bootstrap/js/dist/util';
import 'bootstrap/js/dist/dropdown';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <h1>Hello!</h1>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
