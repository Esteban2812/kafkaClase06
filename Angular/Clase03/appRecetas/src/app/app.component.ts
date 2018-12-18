import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	recetas: Array<{ titulo: string, ingredientes: string, preparacion: string, foto: string, tiempo: number }> = []

	agregarReceta(titulo: string, ingredientes: string, preparacion: string, tiempo: number) {

		const receta = { titulo, ingredientes, preparacion, tiempo, foto: "" }

		this.recetas.push(receta)
	}
}
