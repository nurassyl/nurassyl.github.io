'use strict';

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
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                    <div className="container">
                        <a className="navbar-brand" href="#">
                            Nurassyl
                        </a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        <i className="fa fa-child"></i>
                                        <span>Bio</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        <i className="fa fa-briefcase"></i>
                                        <span>Portfolio</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        <i className="fa fa-address-card"></i>
                                        <span>Resume</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        <i className="fa fa-phone"></i>
                                        <span>Contacts</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <header>
                    <h2 className="text-white text-center">Front-end developer</h2>
                </header>
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
