import {
    NEW_QUEUE,
    SET_NAME,
    SET_DIRECTION,
    SET_SCHEDULES,
    SET_ORDER_TYPE
}from '../constants/queue'
import store from "../store"

export const getName=(state=store.getState())=>{
    return state.queue.name
}

export const getDirection=(state=store.getState())=>{
    return state.queue.direction
}

export const getSchedules=(state=store.getState())=>{
    return state.queue.schedules
}

export const getOrderType=(state=store.getState())=>{
    return state.queue.orderType
}

export const newQueue = ()=>(dispatch)=>{
    dispatch({
        type: NEW_QUEUE
    })
}

export const setName = (name)=>(dispatch)=>{
    dispatch({
        type:SET_NAME,
        payload: name
    })
}

export const setDirection = (direction)=>(dispatch)=>{
    dispatch({
        type:SET_DIRECTION,
        payload: direction
    })
}

export const setSchedules = (schedules)=>(dispatch)=>{
    dispatch({
        type:SET_SCHEDULES,
        payload: schedules
    })
}

export const setOrderType = (orderType)=>(dispatch)=>{
    dispatch({
        type:SET_ORDER_TYPE,
        payload: orderType
    })
}
