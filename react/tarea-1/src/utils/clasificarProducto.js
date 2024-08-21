const clasificarProducto = (producto) => {
  const { nombre, categoria, precio } = producto;

  if (!nombre || !categoria) {
    return 'Error: El nombre y la categoría del producto deben estar definidos y no ser cadenas vacías.';
  }

  let productoConDescuento = { ...producto };
  if (precio > 100) {
    productoConDescuento = { ...productoConDescuento, descuento: true };
  }

  const descripcion = `Producto: ${productoConDescuento.nombre}, Categoría: ${productoConDescuento.categoria}, Precio: $${productoConDescuento.precio}.`;

  let mensajeCategoria;
  switch (categoria.toLowerCase()) {
    case 'alimentos':
      mensajeCategoria = 'Este producto pertenece a la categoría de alimentos. Ideal para la cocina.';
      break;
    case 'ropa':
      mensajeCategoria = 'Este producto es una prenda de ropa. Perfecto para tu guardarropa.';
      break;
    case 'tecnología':
      mensajeCategoria = 'Este producto es un artículo tecnológico. Innovador y moderno.';
      break;
    default:
      mensajeCategoria = 'La categoría del producto no está definida.';
      break;
  }

  return `${descripcion} ${mensajeCategoria}`;
};

export default clasificarProducto;
