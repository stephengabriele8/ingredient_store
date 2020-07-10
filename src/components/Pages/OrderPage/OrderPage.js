import React from 'react';
import './OrderPage.scss';
import { connect } from 'react-redux';
import cn from 'classnames';
import IngredientItem from './../../IngredientItem/IngredientItem';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';

import { selectStore } from './../../../redux/actions/actions';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';

const OrderPage = ({ cart, stores, selectStore, classNames }) => {
  const handleStoreChange = (storeName) => {
    const selectedStore = stores.find((s) => s.name === storeName);
    if (selectedStore) {
      console.log('selectedStore:', selectedStore);
      selectStore(selectedStore);
    }
  };

  const calculateTotal = () => {
    const factor = cart.store.costFactor ? cart.store.costFactor : 1;
    let total = 0;
    cart.ingredients.forEach((ingredient) => {
      total += ingredient.quantity * ingredient.price * factor;
    });
    return Math.round(total * 100) / 100;
  };

  return (
    <div className={cn('OrderPage', classNames)}>
      <div className="OrderPage__cartContainer">
        <div className="OrderPage__cart">
          <h1 className="OrderPage__shoppingCartHeading">Shopping Cart</h1>
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
              <IngredientItem
                key={item.name}
                ingredient={item}
                priceFactor={cart.store.costFactor ? cart.store.costFactor : 1}
              />
            ))}
          </div>
          <div className="OrderPage__orderDetails">
            <Button variant="outlined" size="large" style={{ borderRadius: 50 }}>
              Continue Shopping
            </Button>
            <div className="OrderPage__storeForm">
              <div className="OrderPage__storeSelectLabel">Select Store: </div>
              <Select
                style={{ minWidth: 125 }}
                id="store-select"
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
            </div>
            <div className="OrderPage__costDetails">
              {cart.store.deliveryTimeInDays ? (
                <div>Shipping Time: {cart.store.deliveryTimeInDays} days</div>
              ) : (
                <div>Shipping Time: ----</div>
              )}
              <div>Total: ${calculateTotal()}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="OrderPage__checkoutPane">
        <h1>Payment Info</h1>
        <div>Payment method</div>
        <div className="OrderPage__paymentMethods">
          <Button
            variant="outlined"
            size="large"
            style={{
              borderColor: '#ffffff',
              color: 'white',
              borderRadius: 50
            }}
          >
            <img
              src="https://img.icons8.com/dotty/80/000000/bank-card-back-side.png"
              alt="credit card"
            />
            <div>Credit Card</div>
          </Button>
          <Button
            variant="outlined"
            size="large"
            style={{
              borderColor: '#ffffff',
              color: 'white',
              borderRadius: 50
            }}
          >
            <div className="OrderPage__paymentGroup">
              <img src="https://img.icons8.com/carbon-copy/100/000000/paypal.png" alt="PayPal" />
              <div>Paypal</div>
            </div>
          </Button>
        </div>
        <FormControl className="OrderPage__paymentForm" style={{ minWidth: 120 }}>
          <InputLabel>something else</InputLabel>
          <Input>Something</Input>
          <TextField id="creditCardInfo" label="Credit Card Info" />
          <TextField id="creditCardInfo" label="Credit Card Info" />
        </FormControl>

        <Button variant="contained" size="large" color="primary" style={{ borderRadius: 50 }}>
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
