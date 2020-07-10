import {
  REMOVE_INGREDIENT,
  INCREMENT_INGREDIENT_QUANTITY,
  DECREMENT_INGREDIENT_QUANTITY,
  SELECT_STORE
} from './types';

export const removeIngredient = (ingredient) => {
  return { type: REMOVE_INGREDIENT, ingredient };
};

export const incrementIngredientQuantity = (ingredient) => {
  return { type: INCREMENT_INGREDIENT_QUANTITY, ingredient };
};

export const decrementIngredientQuantity = (ingredient) => {
  return { type: DECREMENT_INGREDIENT_QUANTITY, ingredient };
};

export const selectStore = (store) => {
  return { type: SELECT_STORE, store };
};
