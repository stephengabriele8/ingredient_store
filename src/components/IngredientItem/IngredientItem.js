import React from 'react';
import './IngredientItem.scss';
import { connect } from 'react-redux';
import cn from 'classnames';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import DeleteIcon from '@material-ui/icons/Delete';
import {
  removeIngredient,
  incrementIngredientQuantity,
  decrementIngredientQuantity
} from './../../redux/actions/actions';

const IngredientItem = (props) => {
  const {
    classNames,
    ingredient,
    removeIngredient,
    incrementIngredientQuantity,
    decrementIngredientQuantity,
    priceFactor
  } = props;

  const { name, quantity, price, img } = ingredient;

  return (
    <div className={cn('IngredientItem', classNames)}>
      <div className="IngredientItem__ingredientDisplay IngredientItem__ingredientColumn IngredientItem__ingredientColumn1">
        <img className="IngredientItem__image" src={img} alt="ingredient item" />
        <div className="IngredientItem__name">{name}</div>
      </div>
      <div className="IngredientItem__cost IngredientItem__ingredientColumn IngredientItem__ingredientColumn2">{`$${price}`}</div>
      <div className="IngredientItem__quantityGroup IngredientItem__ingredientColumn IngredientItem__ingredientColumn3">
        <IconButton aria-label="remove" onClick={() => decrementIngredientQuantity(ingredient)}>
          <RemoveIcon />
        </IconButton>
        <TextField
          className="IngredientItem__quantity"
          variant="outlined"
          size="small"
          value={quantity}
        />
        <IconButton aria-label="add" onClick={() => incrementIngredientQuantity(ingredient)}>
          <AddIcon />
        </IconButton>
      </div>
      <div className="IngredientItem__ingredientColumn IngredientItem__ingredientColumn4">
        <div className="IngredientItem__totalPrice">{`$${
          Math.round(price * priceFactor * quantity * 100) / 100
        }`}</div>
        <div className="IngredientItem__deleteButton">
          <IconButton aria-label="delete" onClick={() => removeIngredient(ingredient)}>
            <DeleteIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {};
};
const mapDispatchToProps = {
  removeIngredient,
  incrementIngredientQuantity,
  decrementIngredientQuantity
};

export default connect(mapStateToProps, mapDispatchToProps)(IngredientItem);
