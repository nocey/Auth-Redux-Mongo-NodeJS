import {REGISTER} from '../types/types'

export const register = (state=false,action) =>{
    switch(action.type){
        case REGISTER: 
        return action.payload
        default: 
        return state
    }
    
    }