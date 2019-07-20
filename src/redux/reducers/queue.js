import {
    NEW_QUEUE,
    SET_NAME,
    SET_DIRECTION,
    SET_SCHEDULES,
    SET_ORDER_TYPE
} from '../constants/queue'

const initialState = {
    name: "",
    direction: "",
    schedules: [],
    orderType: ""
}


export const queue = (state = initialState, action) => {
    const { type, payload } = action
    switch (type) {
        case SET_NAME:
            return {
                ...state,
                name: payload
            }
        case SET_DIRECTION:
            return {
                ...state,
                direction: payload
            }
        case SET_SCHEDULES:
            return {
                ...state,
                schedules: payload
            }
        case SET_ORDER_TYPE:
            return {
                ...state,
                orderType: payload
            }
        case NEW_QUEUE:
        default:
            return state;
    }
}