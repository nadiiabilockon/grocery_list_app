import React, { Fragment } from 'react';
import InputProduct from './components/InputProduct';
import ListProducts from './components/ListProducts';

function App() {
  return (
    <Fragment>
      <div className="container">
        <InputProduct />
        <ListProducts />
      </div>
    </Fragment>
  );
}

export default App;
