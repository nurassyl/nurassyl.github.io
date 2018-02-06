'use strict';

import './style.sass';
import 'jquery';
import 'popper.js';
import 'bootstrap';
import 'bootstrap/js/dist/util';
import 'bootstrap/js/dist/dropdown';
import pack from '../package.json';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';



class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            references: [
                {
                    name: 'Биография',
                    ref: 'biography',
                    icon: 'fa fa-child'
                },
                {
                    name: 'Резюме',
                    ref: 'resume',
                    icon: 'fa fa-address-card'
                },
                {
                    name: 'Технологии',
                    ref: 'technologies',
                    icon: 'fa fa-code'
                },
                {
                    name: 'Портфолио',
                    ref: 'portfolio',
                    icon: 'fa fa-briefcase'
                },
                {
                    name: 'Контакты',
                    ref: 'contacts',
                    icon: 'fa fa-phone'
                },
            ],
            technologies: [
                {
                    name: 'HTML 5',
                    src: require('./img/brands/html5.png'),
                    ref: '#'
                },
                {
                    name: 'CSS 3',
                    src: require('./img/brands/css3.png'),
                    ref: '#'
                },
                {
                    name: 'JavaScript',
                    src: require('./img/brands/js.png'),
                    ref: '#'
                },
                {
                    name: 'EcmaScript 6',
                    src: require('./img/brands/es.png'),
                    ref: '#'
                },
                {
                    name: 'TypeScript',
                    src: require('./img/brands/ts.png'),
                    ref: '#'
                },
                {
                    name: 'CoffeeScript',
                    src: require('./img/brands/cs.png'),
                    ref: '#'
                },
                {
                    name: 'Angular',
                    src: require('./img/brands/angular.png'),
                    ref: '#'
                },
                {
                    name: 'React',
                    src: require('./img/brands/react.png'),
                    ref: '#'
                },
                {
                    name: 'Redux',
                    src: require('./img/brands/redux.png'),
                    ref: '#'
                },
                {
                    name: 'Flux',
                    src: require('./img/brands/flux.png'),
                    ref: '#'
                },
                {
                    name: 'MobX',
                    src: require('./img/brands/mobx.png'),
                    ref: '#'
                },
                {
                    name: 'Vue',
                    src: require('./img/brands/vue.png'),
                    ref: '#'
                },
                {
                    name: 'Vuex',
                    src: require('./img/brands/vuex.png'),
                    ref: '#'
                },
                {
                    name: 'Nuxt.js (SSR)',
                    src: require('./img/brands/nuxt.png'),
                    ref: '#'
                },
                {
                    name: 'Babel',
                    src: require('./img/brands/babel.png'),
                    ref: '#'
                },
                {
                    name: 'Webpack',
                    src: require('./img/brands/webpack.png'),
                    ref: '#'
                },
                {
                    name: 'Gulp',
                    src: require('./img/brands/gulp.png'),
                    ref: '#'
                },
                {
                    name: 'Grunt',
                    src: require('./img/brands/grunt.png'),
                    ref: '#'
                },
                {
                    name: 'Bower',
                    src: require('./img/brands/bower.png'),
                    ref: '#'
                },
                {
                    name: 'Yarn',
                    src: require('./img/brands/yarn.png'),
                    ref: '#'
                },
                {
                    name: 'NPM',
                    src: require('./img/brands/npm.png'),
                    ref: '#'
                },
                {
                    name: 'Node',
                    src: require('./img/brands/node.png'),
                    ref: '#'
                },
                {
                    name: 'V8 Engine',
                    src: require('./img/brands/v8.png'),
                    ref: '#'
                },
                {
                    name: 'Sass',
                    src: require('./img/brands/sass.png'),
                    ref: '#'
                },
                {
                    name: 'Less',
                    src: require('./img/brands/less.png'),
                    ref: '#'
                },
                {
                    name: 'PostCSS',
                    src: require('./img/brands/postcss.png'),
                    ref: '#'
                },
                {
                    name: 'Jade',
                    src: require('./img/brands/jade.png'),
                    ref: '#'
                },
                {
                    name: 'Pug',
                    src: require('./img/brands/pug.png'),
                    ref: '#'
                },
                {
                    name: 'jQuery',
                    src: require('./img/brands/jquery.png'),
                    ref: '#'
                },
                {
                    name: 'Twitter Bootstrap',
                    src: require('./img/brands/bootstrap.png'),
                    ref: '#'
                },
                {
                    name: 'Mocha',
                    src: require('./img/brands/mocha.png'),
                    ref: '#'
                },
                {
                    name: 'Chai',
                    src: require('./img/brands/chai.png'),
                    ref: '#'
                },
                {
                    name: 'Jasmine',
                    src: require('./img/brands/jasmine.png'),
                    ref: '#'
                },
                {
                    name: 'Jira',
                    src: require('./img/brands/jira.png'),
                    ref: '#'
                },
                {
                    name: 'Slack',
                    src: require('./img/brands/slack.png'),
                    ref: '#'
                },
                {
                    name: 'GitHub',
                    src: require('./img/brands/github.png'),
                    ref: '#'
                },
                {
                    name: 'Git',
                    src: require('./img/brands/git.png'),
                    ref: '#'
                },
                {
                    name: 'Ubuntu',
                    src: require('./img/brands/ubuntu.png'),
                    ref: '#'
                },
                {
                    name: 'BashScript',
                    src: require('./img/brands/bash.png'),
                    ref: '#'
                },
                {
                    name: 'Gimp',
                    src: require('./img/brands/gimp.png'),
                    ref: '#'
                },
                {
                    name: 'Inkscape',
                    src: require('./img/brands/inkscape.png'),
                    ref: '#'
                },
                {
                    name: 'Photoshop',
                    src: require('./img/brands/photoshop.png'),
                    ref: '#'
                },
                {
                    name: 'Illustrator',
                    src: require('./img/brands/illustrator.png'),
                    ref: '#'
                },
                {
                    name: 'XD',
                    src: require('./img/brands/xd.png'),
                    ref: '#'
                },
                {
                    name: 'UX/UI Design',
                    src: require('./img/brands/ux-ui.png'),
                    ref: '#'
                },
                {
                    name: 'Material UI',
                    src: require('./img/brands/material-ui.png'),
                    ref: '#'
                },
                {
                    name: 'Fluid UI / Metro UI',
                    src: require('./img/brands/fluid-ui.png'),
                    ref: '#'
                },
                {
                    name: 'Apple UI',
                    src: require('./img/brands/apple.png'),
                    ref: '#'
                },
            ]
        }
    }
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                    <div className="container">
                        <a className="navbar-brand" href="/">
                            &lt;{pack.name} /&gt;
                        </a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                            <ul className="navbar-nav">
                                {
                                    this.state.references.map(index => {
                                        return(
                                            <li className="nav-item">
                                                <a className="nav-link" href={'#'+index.ref}>
                                                    <i className={index.icon}></i>
                                                    <span>{index.name}</span>
                                                </a>
                                            </li>
                                        );
                                    })
                                }
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
                <main className="container">
                    <div id={this.state.references[0].ref} className="reference">
                        <h3 className="title">{this.state.references[0].name}</h3>
                        <p className="text-indent">
                            Моё имя Нурасыл, полностью Нурасыл Алданов Нургазиевич.
                            Я родился 21 ноября 1996 года в городе Байконур, Казахстан.
                            Являюсь front-end разработчиком.
                            Живу в городе Байконур с родителями.
                            Работаю фрилансером.
                        </p>
                        <h6 className="subtitle">Знакомство с компьютером</h6>
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
                        <h6 className="subtitle">Образование</h6>
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
                        <h6 className="subtitle">Программирование</h6>
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
                    <div id={this.state.references[1].ref} className="reference">
                        <h3 className="title">{this.state.references[1].name}</h3>
                        <h5 className="text-uppercase">
                            <b>
                                <i className="fa fa-id-card-o"></i> Нурасыл Алданов Нургазиевич
                            </b>
                        </h5>
                        <h5 className="subtitle">
                            Front-end разработчик
                        </h5>
                        <hr className="bold" />
                        <div className="table-responsive-lg">
                            <table className="table table-striped">
                                <tbody>
                                    <tr>
                                        <td>
                                            <b>E-mail:</b>
                                        </td>
                                        <td>
                                            <a href="mailto:nurassyl.aldan@gmail.com">nurassyl.aldan@gmail.com</a> (предпочитаемый способ связи)
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <b>Телефон номер:</b>
                                        </td>
                                        <td>
                                            <a href="tel:+7 (775) 380 0405">+7 (775) 380 0405</a> (доступно WhatsApp и Telegram)
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <b>Skype:</b>
                                        </td>
                                        <td>
                                            <a href="skype:nurassyl.aldan">nurassyl.aldan</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <b>Официальный сайт:</b>
                                        </td>
                                        <td>
                                            <a href="http://nurassyl.github.io" target="__blank">nurassyl.github.io</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <b>Дата рождения:</b>
                                        </td>
                                        <td>
                                            21.11.1996 (21 лет)
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <b>Место рождения:</b>
                                        </td>
                                        <td>
                                            город <a href="https://ru.wikipedia.org/wiki/%D0%91%D0%B0%D0%B9%D0%BA%D0%BE%D0%BD%D1%83%D1%80_(%D0%B3%D0%BE%D1%80%D0%BE%D0%B4)" target="__blank">Байконур</a>, <a href="https://ru.wikipedia.org/wiki/%D0%9A%D0%B0%D0%B7%D0%B0%D1%85%D1%81%D1%82%D0%B0%D0%BD" target="__blank">Казахстан</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <b>Пол:</b>
                                        </td>
                                        <td>
                                            мужской
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <b>Место жительства:</b>
                                        </td>
                                        <td>
                                            город <a href="https://ru.wikipedia.org/wiki/%D0%91%D0%B0%D0%B9%D0%BA%D0%BE%D0%BD%D1%83%D1%80_(%D0%B3%D0%BE%D1%80%D0%BE%D0%B4)" target="__blank">Байконур</a>, <a href="https://ru.wikipedia.org/wiki/%D0%9A%D0%B0%D0%B7%D0%B0%D1%85%D1%81%D1%82%D0%B0%D0%BD" target="__blank">Казахстан</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <b>Зарплатные ожидания:</b>
                                        </td>
                                        <td>
                                            40 000 рублей в месяц
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <b>График и режим работы:</b>
                                        </td>
                                        <td>
                                            Удаленная и полный рабочий день
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <b>Опыт работы:</b>
                                        </td>
                                        <td>
                                            3 года, фрилансер.
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <b>Языки:</b>
                                        </td>
                                        <td>
                                            <a href="https://ru.wikipedia.org/wiki/%D0%9A%D0%B0%D0%B7%D0%B0%D1%85%D1%81%D0%BA%D0%B8%D0%B9_%D1%8F%D0%B7%D1%8B%D0%BA" target="__blank">Казахский</a> (родной), Русский (свободно владею), Английский (Pre-Intermediate)
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <b>Обо мне:</b>
                                        </td>
                                        <td>
                                            Являюсь front-end разработчиком.
                                            Готов работать с Agile/Scrum методологиями разработки.
                                            <br />
                                            Очень хорошо понимаю работы браузеров, HTTP серверов, движков.
                                            <br />
                                            Знаю HTML & CSS движки: Webkit, Gecko, Presto, Edge и т.д.
                                            <br />
                                            Знаю JavaScript движки: V8, SpiderMonkey.
                                            <br />
                                            Соблюдаю правила стандартов W3C, EcmaScript.
                                            <br />
                                            Защищаю сайты от атак XSS/CSRF/XSRF.
                                            <br />
                                            Знаю HTTP и CORS заголовки.
                                            <br />
                                            Оптимизирую веб страниц по метатегам и SEO стандартам для правильного индексирования поисковыми системами Google, Yandex, Bing, Yahoo и т.д.
                                            <br />
                                            Клиентскую часть программирую на языке программирования JavaScript со стандартом EcmaScript 6.
                                            <br />
                                            Верстаю кроссбраузерно, адаптивно, семантично с/без PSD макета и с системами Grid system и Flexbox.
                                            <br />
                                            Создаю SPA и MPA приложений.
                                            <br /><br />
                                            <b>Использую:</b><br />
                                            Git - для систем конроля версий.<br />
                                            Github - для основного репозитория проектов.<br />
                                            Для сервера: NodeJS.<br />
                                            Пакетные менеджеры: NPM, Yarn, Bower.<br />
                                            Unit-тестирование: Jasmine, Karma, Mocha с методами TDD и BDD.<br />
                                            Транспилятор: Babel для старых браузеров или/и для браузеров, которые не поддерживают стандарта EcmaScript.<br />
                                            Сборщики и таск-менеджеры: Webpack, Gulp, Grunt.<br />
                                            Фреймворк jQuery: Для манипуляции с DOM, BOM.<br />
                                            AJAX: XMLHttpResponse, Axios, jQuery AJAX, Angular HTTP object.<br />
                                            Для нормализация CSS тилей: normalize.css<br />
                                            CSS препроцессоры: LESS, SASS/SCSS.<br />
                                            CSS методологии: БЭМ.<br />
                                            HTTP API: RESTful(CRUD) API, JWT, JSON/JSON5.
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <b>Ключевые навыки:</b>
                                        </td>
                                        <td>
                                            Linux/GNU, BashScript, Git, Github, Markdown, HTML5/XHTML, XML, CSS3, ES6, JSON5, Webpack, Babel, ReactJS, Redux, AngularJS, Angular, VueJS, Vuex, Axios, jQuery, REST API и т. д.
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <hr />
                    <div id={this.state.references[2].ref} className="reference">
                        <h3 className="title">{this.state.references[2].name}</h3>
                        <div className="row">
                            {
                                this.state.technologies.map(index => {
                                    return (
                                        <figure className="col-12 col-sm-6 col-md-4 figure text-center">
                                            <img className="figure-img rounded" src={index.src} alt={index.name} width="150" />
                                            <figcaption className="figure-caption">{index.name}</figcaption>
                                        </figure>
                                    );
                                })
                            }
                        </div>
                    </div>
                </main>
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
