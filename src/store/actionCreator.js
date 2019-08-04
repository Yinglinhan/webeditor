import * as actionTypes from './actionTypes'

export const getInputValAction = (val) =>{
    return {
        type:actionTypes.NEW_INPUT_CHANGE,
        inputVal:val
    }
}