import {FETCH_COLAS, NEW_COLA, SET_ACTIVE_CELL} from '../actions/types'
import Cola from '../types/ColaType';
const initialState = {
  items: [],
  newItem: new Cola()
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_COLAS:
      return {
        ...state,
        items: action.payload
      };
    case NEW_COLA:
      return {
        ...state,
        items:[...state.items, action.payload]
      };
    case SET_ACTIVE_CELL:
      return {
        ...state,
        newItem: {...state.newItem, ...state.newItem.setActive(action.payload.hora,action.payload.dia)}
      }
    default:
      return state;
  }
}