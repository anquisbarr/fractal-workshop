import type { Estudiante, Nombre } from "./types/estudiante";
import type { Inventario, Productos } from "./types/inventario";
import { actualizarInventario } from "./utils/actualizarInventario";
import { procesarEstudiantes } from "./utils/procesarEstudiantes";

const estudiantes: Estudiante[] = [
	{
		nombre: "Juan",
		edad: 20,
		calificaciones: [70, 80, 90],
	},
	{
		nombre: "Ana",
		edad: 22,
		calificaciones: [50, 60, 55],
	},
	{
		nombre: "Luis",
		edad: 21,
		calificaciones: [100, 95, 98],
	},
	{
		nombre: "Maria",
		edad: 23,
		calificaciones: [40, 45, 50],
	},
];

const nombresEliminados: Nombre[] = ["Ana", "Maria"];

const result = procesarEstudiantes(estudiantes, nombresEliminados);

console.log("Estudiantes con Promedio:", result.estudiantesConPromedio);
console.log("Mejor Estudiante:", result.mejorEstudiante);

const inventario: Inventario[] = [
	{ id: 1, nombre: "Producto A", cantidad: 10, precio: 500 },
	{ id: 2, nombre: "Producto B", cantidad: 0, precio: 1500 },
	{ id: 3, nombre: "Producto C", cantidad: 5, precio: 800 },
	{ id: 4, nombre: "Producto D", cantidad: 2, precio: 1200 },
];

const productosAgotados: Productos[] = [{ id: 2 }, { id: 4 }];

const resultado = actualizarInventario({ inventario, productosAgotados });

console.log("Inventario Actualizado:", resultado.inventarioActualizado);
console.log("Producto Premium:", resultado.productoPremium);
