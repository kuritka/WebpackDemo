import {login} from './login';

//import {sass} from '../css/demo.scss';
require('../css/layout.about.scss');
require('../css/layout.about.css');
require('../css/layout.main.scss');
require('../css/layout.main.css');

login('admin','1234s');

console.log('App loaded');

document.write('<div>Man Module Loaded </div><p></p>');
