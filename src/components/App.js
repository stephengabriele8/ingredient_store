import React from 'react';
import './App.scss';
import OrderPage from './Pages/OrderPage/OrderPage';

function App() {
  const tempData = [
    { name: 'Bell Pepper', price: 2.99 },
    { name: 'Cilantro', price: 1.29 },
    { name: 'Tomato', price: 1.99 },
    { name: 'Ranch Seasoning', price: 0.99 },
    { name: 'Hot sauce', price: 1.99 }
  ];
  return (
    <div className="App">
      <OrderPage data={tempData} />
    </div>
  );
}

export default App;
