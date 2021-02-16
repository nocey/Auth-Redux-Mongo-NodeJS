import { LOGIN ,USER} from '../types/types'

export const login = (state=false,action) =>{
    switch(action.type){
        case LOGIN: 
        return action.payload
        default: 
        return state
    }
    
    }
export const user = (state=false,action) =>{
        switch(action.type){
            case USER: 
            return action.payload
            default: 
            return state
        }
        
        }
    