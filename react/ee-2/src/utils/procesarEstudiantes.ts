import type { Estudiante, Nombre } from "../types/estudiante";

export function procesarEstudiantes(
	estudiantes: Estudiante[],
	nombresEliminados: Nombre[],
) {
	const estudiantesFiltrados = estudiantes.filter(
		(estudianate) => !nombresEliminados.includes(estudianate.nombre),
	);

	const estudiantesConPromedio = estudiantesFiltrados.map((estudiante) => {
		const promedio = Number.parseFloat(
			(
				estudiante.calificaciones.reduce((a, b) => a + b, 0) /
				estudiante.calificaciones.length
			).toFixed(2),
		);
		return {
			...estudiante,
			promedio,
			estado: promedio >= 60 ? "aprobado" : "reprobado",
		};
	});

	const mejorEstudiante = estudiantesConPromedio.reduce(
		(prev, current) => (prev.promedio > current.promedio ? prev : current),
		estudiantesConPromedio[0],
	);

	// traditional for loop
	for (let i = 0; i < estudiantesConPromedio.length; i++) {
		console.log(
			`Nombre: ${estudiantesConPromedio[i].nombre}`,
			`Promedio: ${estudiantesConPromedio[i].promedio}`,
		);
	}

	// forEach loop
	// biome-ignore lint/complexity/noForEach: it is required for the exercise
	estudiantesConPromedio.forEach((estudiante) => {
		console.log(`El estudiante ${estudiante.nombre} ha ${estudiante.estado}`);
	});

	return { estudiantesConPromedio, mejorEstudiante };
}
