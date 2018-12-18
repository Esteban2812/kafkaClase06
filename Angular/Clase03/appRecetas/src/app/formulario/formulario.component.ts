import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
	selector: 'app-formulario',
	templateUrl: './formulario.component.html',
	styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

	@Output() onAgregar = new EventEmitter()

	constructor() { }

	ngOnInit() {
	}

	imagen: string

	agregarReceta(titulo: string, ingredientes: string, preparacion: string, tiempo: number) {

		const receta = { titulo, ingredientes, preparacion, tiempo, foto: this.imagen }

		this.onAgregar.emit(receta)

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
