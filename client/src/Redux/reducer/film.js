const GETFILM = require('../types/types')

export const films = (state = false, action) => {
    switch (action.type) {
        case GETFILM:
            return action.payload
        default:
            return state
    }
}