import React, { useState, useEffect } from 'react';
import './OrderPage.scss';
import { connect } from 'react-redux';
import cn from 'classnames';
import IngredientItem from './../../IngredientItem/IngredientItem';
import Button from '@material-ui/core/Button';
import { updateIngredientsQuantity } from './../../../redux/actions/actions';

const OrderPage = ({ cart, classNames, updateIngredientsQuantity }) => {
  const [currentIngredients, setCurrentIngredients] = useState(cart);

  const updateIngredientQty = (ingredient) => {
    const updatedIngredients = currentIngredients.map((i) =>
      i.name === ingredient.name ? { ...i, quantity: ingredient.quantity } : i
    );
    setCurrentIngredients(updatedIngredients);
  };

  const removeIngredient = (ingredient) => {
    const revisedIngredients = currentIngredients.filter((i) => ingredient.name != i.name);
    console.log('currentIngredients:', currentIngredients);
    console.log('revisedIngredients:', revisedIngredients);
    setCurrentIngredients(revisedIngredients);
  };

  return (
    <div className={cn('OrderPage', classNames)}>
      <div className="OrderPage__IngredientItems">
        {currentIngredients.map((item) => (
          <IngredientItem
            key={item.name}
            ingredient={item}
            updateIngredientQty={updateIngredientQty}
            removeIngredient={removeIngredient}
          />
        ))}
      </div>
      <Button
        variant="contained"
        size="large"
        color="primary"
        onClick={() => updateIngredientsQuantity(currentIngredients)} // redux call
      >
        Checkout
      </Button>
    </div>
  );
};

const mapStateToProps = (state) => {
  const { cart } = state;
  return { cart };
};

const mapDispatchToProps = {
  updateIngredientsQuantity
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderPage);
