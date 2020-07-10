import React from 'react';
import logo from './logo.svg';
import './App.css';
import CartSum from './components/CartSum'
import Items from './components/Items'

function App() {
  return (
    <div className="App">
      <h1>Shopping Cart</h1>
      <Items />
    </div>
  );
}

export default App;
