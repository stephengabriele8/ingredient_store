import { UPDATE_INGREDIENTS_QUANTITY } from './types';

export const updateIngredientsQuantity = (ingredients) => {
  return { type: UPDATE_INGREDIENTS_QUANTITY, ingredients };
};
