import React, { useState } from 'react';
import './IngredientItem.scss';
import cn from 'classnames';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import DeleteIcon from '@material-ui/icons/Delete';

const IngredientItem = ({ classNames, ingredient, updateIngredientQty, removeIngredient }) => {
  const { name, quantity, price, img } = ingredient;
  let ingredientImg;
  const [qty, setQty] = useState(quantity);

  const incrementQty = () => {
    updateIngredientQty({ ...ingredient, quantity: qty + 1 });
    setQty(qty + 1);
  };

  const decrementQty = () => {
    if (qty > 0) {
      updateIngredientQty({ ...ingredient, quantity: qty - 1 });
      setQty(qty - 1);
    }
  };

  return (
    <div className={cn('IngredientItem', classNames)}>
      <img className="IngredientItem__image" src={img} alt="ingredient item" />
      <div className="IngredientItem__name">{name}</div>
      <div className="IngredientItem__cost">{price}</div>
      <div className="IngredientItem__quantityGroup">
        <IconButton aria-label="remove" onClick={() => decrementQty()}>
          <RemoveIcon />
        </IconButton>
        <TextField
          className="IngredientItem__quantity"
          variant="outlined"
          size="small"
          value={qty}
        />
        <IconButton aria-label="add" onClick={() => incrementQty()}>
          <AddIcon />
        </IconButton>
      </div>
      <div className="IngredientItem__deleteButton">
        <IconButton aria-label="delete" onClick={() => removeIngredient(ingredient)}>
          <DeleteIcon />
        </IconButton>
      </div>
      <div className="IngredientItem__totalPrice">{`$${Math.round(price * qty * 100) / 100}`}</div>
    </div>
  );
};

export default IngredientItem;
