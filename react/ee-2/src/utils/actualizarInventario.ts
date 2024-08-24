import type { Inventario, Productos } from "../types/inventario";

export function actualizarInventario({
	inventario,
	productosAgotados,
}: { inventario: Inventario[]; productosAgotados: Productos[] }): {
	inventarioActualizado: Inventario[];
	productoPremium: Inventario | null;
} {
	const inventarioFiltrado = inventario.filter(
		(item) => !productosAgotados.some((agotado) => agotado.id === item.id),
	);

	const inventarioActualizado = inventarioFiltrado.map((item) => ({
		...item,
		disponible: item.cantidad > 0,
	}));

	const productoPremium =
		inventarioActualizado.find((item) => item.precio > 1000) || null;

	for (let i = 0; i < inventarioActualizado.length; i++) {
		console.log(
			`Nombre: ${inventarioActualizado[i].nombre}, Cantidad: ${inventarioActualizado[i].cantidad}`,
		);
	}

	// biome-ignore lint/complexity/noForEach: <explanation>
	inventarioActualizado.forEach((item) => {
		console.log(`Precio total: ${item.cantidad * item.precio}`);
	});

	return { inventarioActualizado, productoPremium };
}
