import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	recetas: Array<{ titulo: string, ingredientes: string, preparacion: string, foto: string, tiempo: number }> = []

	agregar(receta) {
		this.recetas.push(receta)
	}
}
