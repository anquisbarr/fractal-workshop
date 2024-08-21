import React from 'react';
import UsuarioComponent from './components/UserComponent';
import ProductoComponent from './components/ProductComponent';

const App = () => {
  return (
    <div>
      <h1>Aplicación de Usuario y Producto</h1>
      <UsuarioComponent />
      <ProductoComponent />
    </div>
  );
};

export default App;
