import React from 'react';
import './OrderPage.scss';
import { connect } from 'react-redux';
import cn from 'classnames';
import IngredientItem from './../../IngredientItem/IngredientItem';
import Button from '@material-ui/core/Button';
import { selectStore } from './../../../redux/actions/actions';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

const OrderPage = ({ cart, stores, selectStore, classNames }) => {
  console.log('cart:', cart);
  const handleStoreChange = (storeName) => {
    const selectedStore = stores.find((s) => s.name === storeName);
    if (selectedStore) {
      console.log('selectedStore:', selectedStore);
      selectStore(selectedStore);
    }
  };
  return (
    <div className={cn('OrderPage', classNames)}>
      <div className="OrderPage__cartContainer">
        <div className="OrderPage__cart">
          <h1>Shopping Cart</h1>
          <div className="OrderPage__ingredientHeadings">
            <div className="OrderPage__ingredientColumnHeadings OrderPage__ingredientColumn1">
              Ingredient
            </div>
            <div className="OrderPage__ingredientColumnHeadings OrderPage__ingredientColumn2">
              Cost
            </div>
            <div className="OrderPage__ingredientColumnHeadings OrderPage__ingredientQuantity OrderPage__ingredientColumn3">
              Quantity
            </div>
            <div className="OrderPage__ingredientColumnHeadings OrderPage__ingredientColumn4">
              Total Price
            </div>
          </div>
          <div className="OrderPage__ingredientItems">
            {cart.ingredients.map((item) => (
              <IngredientItem key={item.name} ingredient={item} />
            ))}
          </div>
          <div className="OrderPage__orderDetails">
            <Button variant="outlined" size="large">
              Continue Shopping
            </Button>
            <FormControl className="OrderPage__form" style={{ minWidth: 120 }}>
              <InputLabel id="demo-simple-select-label">Store</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={cart.store.name ? cart.store.name : ''}
                onChange={(event) => {
                  handleStoreChange(event.target.value);
                }}
              >
                {stores.map((store, index) => (
                  <MenuItem key={index} value={store.name}>
                    {store.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <div className="OrderPage__costDetails">
              <div>Subtotal</div>
              <div>Shipping</div>
              <div>Total</div>
            </div>
          </div>
        </div>
      </div>
      <div className="OrderPage__checkoutPane">
        <Button variant="contained" size="large" color="primary">
          Checkout
        </Button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log('state:', state);
  const { cart, stores, store } = state;
  return { cart, stores, store };
};

const mapDispatchToProps = { selectStore };

export default connect(mapStateToProps, mapDispatchToProps)(OrderPage);
