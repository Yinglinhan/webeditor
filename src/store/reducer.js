import * as actionTypes from './actionTypes'

const initState = {
    inputVal: ''
}

export default (state = initState, action) => {
    const newState = JSON.parse(JSON.stringify(state))
    switch (action.type) {
        case actionTypes.NEW_INPUT_CHANGE:
            newState.inputVal = action.inputVal
            return newState
    }
    return newState;
}