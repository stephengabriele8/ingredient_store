import React from 'react';
import './IngredientItem.scss';
import cn from 'classnames';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

const IngredientItem = ({ classNames, name }) => {
  return (
    <div className={cn('IngredientItem', classNames)}>
      <div className="IngredientItem__name">{name}</div>
      <IconButton aria-label="add">
        <AddIcon />
      </IconButton>
      <IconButton aria-label="remove">
        <RemoveIcon />
      </IconButton>
    </div>
  );
};

export default IngredientItem;
