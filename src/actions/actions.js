import { ADD, REMOVE, MODIFY, CHANGE_PRICE, GET_TASK } from "../actionTypes/actionTypes";

const add = (id, name, price, category, feedback) => {
    return {
        type: ADD,
        payload: { id, name, price, category, feedback }
    }
}
const remove = (id, price) => {
    return {
        type: REMOVE,
        payload: { id, price }
    }
}

const modify = (id, selected) => {
    return {
        type: MODIFY,
        payload: { id, selected }
    }
}

const changePrice = (id, price) => {
    return {
        type: CHANGE_PRICE,
        payload: { id, price }
    }
}

const getTask = (name) => {
    return {
        type: GET_TASK,
        payload: name
    }
}

export { add, remove, modify, changePrice, getTask };