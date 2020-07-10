import React, { useState, useEffect } from 'react';
import './OrderPage.scss';
import { connect } from 'react-redux';
import cn from 'classnames';
import IngredientItem from './../../IngredientItem/IngredientItem';
import { selectStore } from './../../../redux/actions/actions';
import { Button, Input, MenuItem, Select } from '@material-ui/core';

const OrderPage = ({ cart, stores, selectStore, classNames }) => {
  const [deliveryTimeInDays, setDeliveryTimeInDays] = useState('----');
  const [costFactor, setCostFactor] = useState(1);

  useEffect(() => {
    if (cart.store.deliveryTimeInDays) {
      setDeliveryTimeInDays(cart.store.deliveryTimeInDays);
    } else {
      setDeliveryTimeInDays('----');
    }
  }, [cart.store.deliveryTimeInDays]);

  useEffect(() => {
    if (cart.store.costFactor) {
      setCostFactor(cart.store.costFactor);
    } else {
      setCostFactor(1);
    }
  }, [cart.store.costFactor]);

  const handleStoreChange = (storeName) => {
    const selectedStore = stores.find((s) => s.name === storeName);
    if (selectedStore) {
      selectStore(selectedStore);
    }
  };

  const calculateTotal = () => {
    let total = 0;
    cart.ingredients.forEach((ingredient) => {
      total += ingredient.quantity * ingredient.price * costFactor;
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
              <IngredientItem key={item.name} ingredient={item} priceFactor={costFactor} />
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
              <div>Shipping Time: {deliveryTimeInDays} days</div>

              <div>Total: ${calculateTotal()}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="OrderPage__checkoutPane">
        <div className="OrderPage__checkoutInfoContainer">
          <h1 className="OrderPage__paymentInfoHeading">Payment Info</h1>
          <div className="OrderPage__cardLabel">Payment method</div>
          <div className="OrderPage__paymentMethods">
            <Button
              variant="outlined"
              size="large"
              style={{
                borderColor: '#ffffff',
                color: 'white',
                borderRadius: 50,
                width: '45%'
              }}
            >
              <div className="OrderPage__paymentGroup">
                <img
                  className="OrderPage__paymentTypeImg"
                  src="https://img.icons8.com/dotty/80/000000/bank-card-back-side.png"
                  alt="credit card"
                />
                <div>Credit Card</div>
              </div>
            </Button>
            <Button
              variant="outlined"
              size="large"
              style={{
                borderColor: '#ffffff',
                color: 'white',
                borderRadius: 50,
                width: '45%'
              }}
            >
              <div className="OrderPage__paymentGroup">
                <img
                  className="OrderPage__paymentTypeImg"
                  src="https://img.icons8.com/carbon-copy/100/000000/paypal.png"
                  alt="PayPal"
                />
                <div>Paypal</div>
              </div>
            </Button>
          </div>
          <div className="OrderPage__paymentInfoForm">
            <div className="OrderPage__cardName OrderPage__cardLabel"> Card Name</div>
            <Input
              id="creditCardName"
              label="Credit Card Name"
              disableUnderline={true}
              style={{
                backgroundColor: 'white',
                borderRadius: '25px',
                padding: '0 10px',
                width: '100%'
              }}
            />
            <div className="OrderPage__cardNumber OrderPage__cardLabel">Card Number</div>
            <Input
              id="creditCardNumber"
              label="Credit Card Number"
              disableUnderline={true}
              style={{
                backgroundColor: 'white',
                borderRadius: '25px',
                padding: '0 10px',
                width: '100%'
              }}
            />
            <div className="OrderPage__exprAndCvv">
              <div className="OrderPage__cardExpirationContainer OrderPage__privateDetails">
                <div className="OrderPage__privateDetailsLabel">Card Expiration</div>
                <Input
                  id="creditCardExpiration"
                  label="Credit Card Expiration"
                  disableUnderline={true}
                  style={{
                    backgroundColor: 'white',
                    borderRadius: '25px',
                    padding: '0 10px',
                    width: '100%'
                  }}
                />
              </div>
              <div className="OrderPage__cardCvvContainer OrderPage__privateDetails">
                <div className="OrderPage__privateDetailsLabel">CVV</div>
                <Input
                  id="cvv"
                  label="cvv"
                  disableUnderline={true}
                  style={{
                    backgroundColor: 'white',
                    borderRadius: '25px',
                    padding: '0 10px',
                    width: '100%'
                  }}
                />
              </div>
            </div>
          </div>

          <Button
            variant="contained"
            size="large"
            color="primary"
            style={{
              borderRadius: 50,
              backgroundColor: '#4cf392',
              width: '100%',
              opacity: '0.8',
              fontSize: '1.2rem'
            }}
          >
            Checkout
          </Button>
        </div>
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
