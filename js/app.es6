import {login} from './login';

//import {sass} from '../css/demo.scss';
require('../css/demo.scss');
require('../css/layout.css');


login('admin','1234s');

console.log('App loaded');

document.write('<div>Man Module Loaded </div><p></p>');
