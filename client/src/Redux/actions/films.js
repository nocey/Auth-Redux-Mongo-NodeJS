import axios from "axios"
import { GETFILM } from "../types/types"

export const getFilms =() => {
    return async (dispatch) => {
       await axios({
           method: 'GET',
           url:'http://localhost:3001/movie/findlast',
       })
        .then(data=>dispatch(getFilm(data)))
        .catch(err=>err)
    }
}

const getFilm = (e) => {
    return {
        type: GETFILM,
        payload: e
    }
}