const manejarDatosUsuario = (usuario) => {
  const { nombre, apellido, edad } = usuario;

  if (!nombre || !apellido || typeof edad === 'undefined') {
    return 'Error: Todas las propiedades del objeto usuario deben estar definidas y no ser cadenas vacías.';
  }

  const usuarioCompleto = { ...usuario, completo: `${nombre} ${apellido}` };
  let mensaje = `Usuario: ${usuarioCompleto.completo}. `;

  if (edad >= 18) {
    mensaje += 'El usuario es mayor de edad.';
  } else {
    mensaje += 'El usuario es menor de edad.';
  }

  return mensaje;
};

export default manejarDatosUsuario;
