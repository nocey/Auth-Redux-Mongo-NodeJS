import { LOGIN, USER } from '../types/types'
import axios from 'axios'
export const getLogin =(mail,password) => {
    return async (dispatch) => {
       await axios({
           method: 'POST',
           url:'http://localhost:3001/a/login',
           data:{
               "email":mail,
            "password":password}
       })
        .then(data=>dispatch(login(data)))
        .catch(err=>err)
    }
}

const login = (e) => {
    return {
        type: LOGIN,
        payload: e
    }
}


export const User = (e) => {
    return {
        type: USER,
        payload: e
    }
}