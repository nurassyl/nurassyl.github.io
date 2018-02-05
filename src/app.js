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
                            &lt;Nurassyl /&gt;
                        </a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        <i className="fa fa-child"></i>
                                        <span>Биография</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        <i className="fa fa-briefcase"></i>
                                        <span>Портфолио</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        <i className="fa fa-code"></i>
                                        <span>Технологии</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        <i className="fa fa-address-card"></i>
                                        <span>Резюме</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        <i className="fa fa-phone"></i>
                                        <span>Контакты</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <header>
                    <div className="container">
                        <h1 className="text-white text-center">
                            <i className="fa fa-code d-block d-sm-inline-block"></i> Front-end разработчик <i className="fa fa-code d-block d-sm-inline-block"></i>
                        </h1>
                        <hr />
                        <div className="row">
                            <div className="column col-12 col-sm-6 col-md-4 text-center text-white">
                                <p>
                                    <i className="fa fa-hourglass"></i>
                                </p>
                                <p className="text">
                                    <b className="text-uppercase">3 года</b> опыт работы
                                </p>
                            </div>
                            <div className="column col-12 col-sm-6 col-md-4 text-center text-white">
                                <p>
                                    <i className="fa fa-trophy"></i>
                                </p>
                                <p className="text">
                                    <b className="text-uppercase">Middle</b> уровень
                                </p>
                            </div>
                            <div className="column col-12 col-md-4 text-center text-white">
                                <p>
                                    <i className="fa fa-search"></i>
                                </p>
                                <p className="text">
                                    Данный момент <b className="text-uppercase">ищу работу</b>
                                </p>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
