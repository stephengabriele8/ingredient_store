import React, { useState, useEffect } from 'react';
import './IngredientItem.scss';
import cn from 'classnames';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

const IngredientItem = ({ classNames, name }) => {
  const [quantity, setQuantity] = useState(0);

  // const handleQuantityChange = (event) => {
  //   const onlyNums = event.target.value.replace(/[^0-9]/g, '');
  // };

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className={cn('IngredientItem', classNames)}>
      <div className="IngredientItem__name">{name}</div>
      <IconButton aria-label="remove" onClick={() => decrementQuantity()}>
        <RemoveIcon />
      </IconButton>
      <TextField
        className="IngredientItem__quantity"
        variant="outlined"
        size="small"
        // onChange={(event) => handleQuantityChange(event)}
        value={quantity}
      />
      <IconButton aria-label="add" onClick={() => incrementQuantity()}>
        <AddIcon />
      </IconButton>
    </div>
  );
};

export default IngredientItem;
