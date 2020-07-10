import React from 'react';
import './CheckoutPane.scss';
import cn from 'classnames';
import { Button, Input } from '@material-ui/core';

const CheckoutPane = ({ classNames }) => {
  return (
    <div className={cn('CheckoutPane', classNames)}>
      <div className="CheckoutPane__checkoutInfoContainer">
        <h1 className="CheckoutPane__paymentInfoHeading">Payment Info</h1>
        <div className="CheckoutPane__cardLabel">Payment method</div>
        <div className="CheckoutPane__paymentMethods">
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
            <div className="CheckoutPane__paymentGroup">
              <img
                className="CheckoutPane__paymentTypeImg"
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
            <div className="CheckoutPane__paymentGroup">
              <img
                className="CheckoutPane__paymentTypeImg"
                src="https://img.icons8.com/carbon-copy/100/000000/paypal.png"
                alt="PayPal"
              />
              <div>Paypal</div>
            </div>
          </Button>
        </div>
        <div className="CheckoutPane__paymentInfoForm">
          <div className="CheckoutPane__cardName CheckoutPane__cardLabel"> Card Name</div>
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
          <div className="CheckoutPane__cardNumber CheckoutPane__cardLabel">Card Number</div>
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
          <div className="CheckoutPane__exprAndCvv">
            <div className="CheckoutPane__cardExpirationContainer CheckoutPane__privateDetails">
              <div className="CheckoutPane__privateDetailsLabel">Card Expiration</div>
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
            <div className="CheckoutPane__cardCvvContainer CheckoutPane__privateDetails">
              <div className="CheckoutPane__privateDetailsLabel">CVV</div>
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
  );
};

export default CheckoutPane;
