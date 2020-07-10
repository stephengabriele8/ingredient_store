import React from 'react';
import './App.scss';
import OrderPage from './Pages/OrderPage/OrderPage';
import Header from './Header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <OrderPage />
    </div>
  );
}

export default App;
