import {
  REMOVE_INGREDIENT,
  INCREMENT_INGREDIENT_QUANTITY,
  DECREMENT_INGREDIENT_QUANTITY,
  SELECT_STORE
} from '../actions/types';

import { combineReducers } from 'redux';
import { mockUserIngredientsData, mockStoreLocations } from './../../mockData';

const initialStateForCart = {
  ingredients: mockUserIngredientsData,
  store: {}
};

function cart(state = initialStateForCart, action) {
  let updatedIngredients = state.ingredients;
  switch (action.type) {
    case REMOVE_INGREDIENT:
      updatedIngredients = state.ingredients.filter(
        (ingredient) => ingredient.name !== action.ingredient.name
      );
      return {
        ...state,
        ingredients: updatedIngredients
      };
    case INCREMENT_INGREDIENT_QUANTITY:
      updatedIngredients = state.ingredients.map((ingredient) => {
        if (ingredient.name === action.ingredient.name) {
          ingredient = { ...ingredient, quantity: action.ingredient.quantity + 1 };
        }
        return ingredient;
      });
      return {
        ...state,
        ingredients: updatedIngredients
      };
    case DECREMENT_INGREDIENT_QUANTITY:
      if (action.ingredient.quantity > 1) {
        updatedIngredients = state.ingredients.map((ingredient) => {
          if (ingredient.name === action.ingredient.name) {
            ingredient = { ...ingredient, quantity: action.ingredient.quantity - 1 };
          }
          return ingredient;
        });
      }
      return {
        ...state,
        ingredients: updatedIngredients
      };
    case SELECT_STORE:
      return {
        ...state,
        store: action.store
      };
    default:
      return state;
  }
}

const initialStateForStores = mockStoreLocations;

function stores(state = initialStateForStores, action) {
  switch (action.type) {
    default:
      return state;
  }
}

const ingredientStoreApp = combineReducers({ cart, stores });
export default ingredientStoreApp;
