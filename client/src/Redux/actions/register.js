import {REGISTER } from '../types/types'
import axios from 'axios'
export const getRegister =(mail,password,name) => {
    return async (dispatch) => {
       await axios({
           method: 'POST',
           url:'http://localhost:3001/a/register',
           data:{
               "name":name,
               "email":mail,
                "password":password
            }
       })
        .then(data=>dispatch(register(data)))
        .catch(err=>dispatch(register(err)))
    }
}

const register = (e) => {
    return {
        type: REGISTER,
        payload: e
    }
}