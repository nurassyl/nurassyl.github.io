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
                        <a className="navbar-brand" href="/">
                            &lt;Nurassyl /&gt;
                        </a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link" href="#biography">
                                        <i className="fa fa-child"></i>
                                        <span>Биография</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#resume">
                                        <i className="fa fa-address-card"></i>
                                        <span>Резюме</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#technologies">
                                        <i className="fa fa-code"></i>
                                        <span>Технологии</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#portfolio">
                                        <i className="fa fa-briefcase"></i>
                                        <span>Портфолио</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#contacts">
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
                                    <i className="fa fa-language"></i>
                                </p>
                                <p className="text">
                                    English is <b className="text-uppercase">Pre-Intermediate</b>
                                </p>
                            </div>
                        </div>
                    </div>
                </header>
                <main class="container">
                    <div id="biography" className="page">
                        <h3>Биография</h3>
                        <p className="text-indent">
                            Моё имя Нурасыл, полностью Нурасыл Алданов Нургазиевич.
                            Я родился 21 ноября 1996 года в городе Байконур, Казахстан.
                            Являюсь front-end разработчиком.
                            Живу в городе Байконур с родителями.
                            Работаю фрилансером.
                        </p>
                        <h6>Знакомство с компьютером</h6>
                        <p className="text-indent">
                            Я вырос в городе Байконур. Первый раз с компьютером познакомился в середине 8 класса (2010 год).
                            Большое спасибо родителям за то, что купили мне компьютер.
                            Играл много компьютерных игр с друзьями, в то время моя комната была небольшим PlayStation клубом. &#9786;
                            Через несколько месяцев вылетила операционная система Windows XP.
                            Попросил у родителей вызвать мастера для починения, вызвали и починели компьютера.
                            Через день снова вылетила ОС Windows. Второй раз не мог вызвать.
                            Помнил мастера, что он установил этот Windows через DVD-R диск.
                            Попросил записать мне на пустой диск и купил Windows XP.
                            Первый раз сам установил свой Windows на компьютер. Очень сильно радовался, что починил его сам.
                            С этого момента я заинтересовался программными обеспечениями.
                            Изучал MS Office (Word, Excel, PowerPoint), Photoshop, Audition, CorelDraw и т. д.
                        </p>
                        <h6>Образование</h6>
                        <p className="text-indent">
                            Пошел в школу в 2003 году и закончил 9 класс в 2012 году по имени "К. Э. Циолковский" в городе Байконур.
                            Поступил в колледж по имени "Жамбылский политехнический колледж" в городе Тараз по специальности "Программист" и закончил в 2016 году.
                            Закончил художественную школу в 2011 году в городе Байконур.
                            <span className="text-indent d-inline-block">
                                Данный момент изучаю английский язык продвинуто и изучаю UI/UX дизайн. Моя цель стать Full-Stack разработчиком.
                                Сначала развиваюсь по front-end и UX/UI части потом back-end часть.
                                Мои работы есть в моих профилах на <a href="http://github.com/nurassyl" target="__blank">github.com</a>, <a href="http://bitbucket.org/nurassyl" target="__blank">bitbucket.org</a>, <a href="http://behance.net/nurasyl" target="__blank">behacne.net</a> и в <a href="#portfolio" target="__blank">портфолио</a>
                            </span>
                        </p>
                        <h6>Программирование</h6>
                        <p className="text-indent">
                            В один прекрасный день сидел в социальной сети "ВКонтакте" и возник вопрос "Как создаются социальные сети и сайты?".
                            С этого момента я начал искать в интернете информации о сайтах и о их созданиях.
                            Нашел движок под названием "ViiEngine" и смотрел видеоуроков в YouTube об установках по FTP клиенту.
                            <br />
                            <span className="text-indent d-inline-block">
                                В конце января 2015 года начал изучать языка разметки HTML/XHTML и CSS правила стилей и параллельно создал простенкую веб страницу за одну ночь.
                                Потом изучал <abbr title="Язык программирования">ЯП</abbr> PHP, СУБД MySQL, HTTP сервер Apache.
                                Хотел оживить сайта с анимациями, обработкой событий и AJAX (XMLHttpRequest) запросами.
                                В плане был выучить <abbr title="Язык программирования">ЯП</abbr> JavaScript и jQuery фреймворка. Выучил и создал свою первую социальную сеть под названием "imbay" <em>(Данный момент сайт не активно)</em>.
                                В 2016 году начал использовать NodeJS, Ruby, Python, PostgreSQL, Unix, Linux/GNU, BashScript, ReactJS, AngularJS, Gulp, Grunt, Jade, Pug, Slim, Git, Github, Bootstrap.
                                В cередине 2017 года начал использовать VueJS, EcmaScript, Babel, Webpack.
                            </span>
                            <br />
                            <span className="text-indent d-inline-block">
                                Данный момент использую операционную систему Linux/GNU дистрибутив Ubuntu.
                                Мой основной текстовой редактор Visual Code.
                                Использую <abbr title="Version control system">VCS</abbr> Git и Github в качестве репозитория.
                                Часто сижу на сайтах <a href="http://habrahabr.ru" target="__blank">habrahabr.ru</a>, <a href="http://toster.ru" target="__blank">toster.ru</a>, <a href="http://webref.ru" target="__blank">webref.ru</a>, <a href="http://developer.mozilla.org" target="__blank">developer.mozilla.org</a>, <a href="http://behance.net" target="__blank">behance.net</a> и <a href="http://pinterest.com" target="__blank">pinterest.com</a>
                                Использую библиотеку ReactJS, сборщика Webpack, ES6 транспилятор Babel и т. д.
                                Изучаю VueJS, ReactNative, Cordova/Phonegap.
                            </span>
                        </p>
                        <p></p>
                    </div>
                    <hr />
                </main>
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
