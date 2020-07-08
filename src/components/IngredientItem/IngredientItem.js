import React, { useState, useEffect } from 'react';
import './IngredientItem.scss';
import cn from 'classnames';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import DeleteIcon from '@material-ui/icons/Delete';

const IngredientItem = ({ classNames, ingredient, updateIngredientQty, removeIngredient }) => {
  // console.log('ingredient:', ingredient);
  const { name, quantity, price } = ingredient;
  const [qty, setQty] = useState(quantity);

  // const handleQuantityChange = (event) => {
  //   const onlyNums = event.target.value.replace(/[^0-9]/g, '');
  // };

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
      <div className="IngredientItem__name">{name}</div>
      <IconButton aria-label="remove" onClick={() => decrementQty()}>
        <RemoveIcon />
      </IconButton>
      <TextField
        className="IngredientItem__quantity"
        variant="outlined"
        size="small"
        // onChange={(event) => handleQuantityChange(event)}
        value={qty}
      />
      <IconButton aria-label="add" onClick={() => incrementQty()}>
        <AddIcon />
      </IconButton>
      <IconButton aria-label="delete" onClick={() => removeIngredient(ingredient)}>
        <DeleteIcon />
      </IconButton>
    </div>
  );
};

export default IngredientItem;
