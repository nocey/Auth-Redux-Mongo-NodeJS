import {combineReducers} from 'redux';
import {login,user} from './reducer/login';
import {register} from './reducer/register';
import {films} from './reducer/film';

export default combineReducers({login,user,register,films});