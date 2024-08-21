import React, { useState } from 'react';
import manejarDatosUsuario from '../utils/manejarDatosUsuario';

const UsuarioComponent = () => {
  const [mensaje, setMensaje] = useState('');

  const handleUsuarioClick = () => {
    const usuario = { nombre: 'Juan', apellido: 'Pérez', edad: 20 };
    const resultado = manejarDatosUsuario(usuario);
    setMensaje(resultado);
  };

  return (
    <div>
      <button type="button" onClick={handleUsuarioClick}>Manejar Datos del Usuario</button> 
      <p>{mensaje}</p>
    </div>
  );
};

export default UsuarioComponent;
