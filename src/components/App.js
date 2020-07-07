import React from 'react';
import './App.scss';
import OrderPage from './Pages/OrderPage/OrderPage';

function App() {
  return (
    <div className="App">
      <OrderPage data={['Bell pepper', 'Cilantro', 'Tomatoes']} />
    </div>
  );
}

export default App;
