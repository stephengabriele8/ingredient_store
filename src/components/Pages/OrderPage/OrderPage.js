import React, { useState, useEffect } from 'react';
import './OrderPage.scss';
import { connect } from 'react-redux';
import cn from 'classnames';
import IngredientItem from './../../IngredientItem/IngredientItem';
import { selectStore } from './../../../redux/actions/actions';
import { Button, MenuItem, Select } from '@material-ui/core';
import { roundToDecimalPlace } from './../../../utilities';
import CheckoutPane from './../../CheckoutPane/CheckoutPane';

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
    return roundToDecimalPlace(total, 2);
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
              <div className="OrderPage__shippingDetailsGroup OrderPage__costDetailsSubgroup">
                <div>Shipping ETA: </div>
                <div>{deliveryTimeInDays} days</div>
              </div>
              <div className="OrderPage__totalDetailsGroup OrderPage__costDetailsSubgroup">
                <div>Total: </div>
                <div>${calculateTotal()}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CheckoutPane />
    </div>
  );
};

const mapStateToProps = (state) => {
  const { cart, stores, store } = state;
  return { cart, stores, store };
};

const mapDispatchToProps = { selectStore };

export default connect(mapStateToProps, mapDispatchToProps)(OrderPage);
