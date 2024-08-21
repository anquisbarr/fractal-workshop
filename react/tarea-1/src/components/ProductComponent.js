import React, { useState } from 'react';
import clasificarProducto from '../utils/clasificarProducto';

const ProductoComponent = () => {
  const [mensaje, setMensaje] = useState('');

  const handleProductoClick = () => {
    const producto = { nombre: 'Smartphone', categoria: 'tecnología', precio: 150 };
    const resultado = clasificarProducto(producto);
    setMensaje(resultado);
  };

  return (
    <div>
      <button type="button" onClick={handleProductoClick}>Clasificar Producto</button> 
      <p>{mensaje}</p>
    </div>
  );
};

export default ProductoComponent;
