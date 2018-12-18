import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	recetas: Array<{ titulo: string, ingredientes: string, preparacion: string, foto: string, tiempo: number }> = []

	imagen: string

	agregarReceta(titulo: string, ingredientes: string, preparacion: string, tiempo: number) {

		const receta = { titulo, ingredientes, preparacion, tiempo, foto: this.imagen }

		this.recetas.push(receta)

		this.imagen = undefined
	}

	seleccionarImagen(evt) {
		//console.log(evt.target.files[0])

		const fs: FileReader = new FileReader()
		fs.onloadend = (resultado) => {
			this.imagen = (resultado.currentTarget as FileReader).result as string

			//console.log(resultado.currentTarget)
		}

		fs.readAsDataURL(evt.target.files[0])

	}
}
