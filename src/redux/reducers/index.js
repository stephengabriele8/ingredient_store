import { UPDATE_INGREDIENTS_QUANTITY } from '../actions/types';
import { combineReducers } from 'redux';

const initialState = [];

function cart(state = initialState, action) {
  switch (action.type) {
    case UPDATE_INGREDIENTS_QUANTITY:
      return action.ingredients;
    default:
      return state;
  }
}

const ingredientStoreApp = combineReducers({ cart });
export default ingredientStoreApp;
