import React from 'react';
import './Header.scss';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const Header = (props) => {
  return (
    <header className="Header__container">
      <img
        src="https://i.ibb.co/NL1ccZ0/CHEF-i-Qgif.gif"
        alt="CHEF-i-Qgif"
        border="0"
        className="Header__chefmanImage"
      />
      <div className="Header__option">Smart Cooker</div>
      <div className="Header__option">Account</div>
      <IconButton style={{ marginLeft: 'auto', marginRight: '50px', padding: '25px' }}>
        <ShoppingCartIcon fontSize="large" />
      </IconButton>
    </header>
  );
};

export default Header;
