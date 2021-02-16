import {combineReducers} from 'redux';
import {login,user} from './reducer/login';
import {register} from './reducer/register';

export default combineReducers({login,user,register});