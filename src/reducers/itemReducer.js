import uuid from 'uuid';
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM } from '../actions/types';
// const GET_ITEMS = 'GET_ITEMS';

const initialState={
    items: [
        {id: uuid(), name: 'Eggs'},
        {id: uuid(), name: 'Milk'},
        {id: uuid(), name: 'Steak'},
        {id: uuid(), name: 'Water'}
    ]
};
// Give the function a name
function myReducer(state = initialState, action) {
    switch (action.type) {
      case GET_ITEMS:
        return {
          ...state
        };
      default:
        return state;
    }
  }
  
  // Export it as the default
  export default myReducer;
  
     