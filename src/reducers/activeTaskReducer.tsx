import { ADD, REMOVE } from "../actionTypes/actionTypes";

const initialState = {
  activeTasks: [],
  totalPrice: 0
};

const activeTaskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        activeTasks: [...state.activeTasks, action.payload],
        totalPrice: state.totalPrice + action.payload.price
      }

    case REMOVE:
      return {
        ...state,
        activeTasks: state.activeTasks.filter(({ id }) => id !== action.payload.id),
        totalPrice: state.totalPrice - action.payload.price
      }

    default:
      return state;
  }
};

export { activeTaskReducer };