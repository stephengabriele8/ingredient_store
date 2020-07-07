import React from 'react';
import './OrderPage.scss';
import cn from 'classnames';
import IngredientItem from './../../IngredientItem/IngredientItem';
import Button from '@material-ui/core/Button';

const OrderPage = ({ classNames, data }) => {
  return (
    <div className={cn('OrderPage', classNames)}>
      <div className="OrderPage__IngredientItems">
        {data.map((ingredient) => (
          <IngredientItem key={ingredient} name={ingredient} />
        ))}
      </div>
      <Button variant="contained" size="large" color="primary">
        Checkout
      </Button>
    </div>
  );
};

export default OrderPage;
