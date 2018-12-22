import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IReceta } from '../receta.interface';
import { RecetaService } from '../receta.service';
import { LogService } from '../log.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-formulario',
	templateUrl: './formulario.component.html',
	styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

	//@Output() onAgregar = new EventEmitter<IReceta>()

	constructor(private recetaService: RecetaService, private router: Router/*, private logService: LogService*/) { }

	ngOnInit() {
	}

	imagen: string

	agregarReceta(titulo: string, ingredientes: string, preparacion: string, tiempo: number) {

		const receta: IReceta = { titulo, ingredientes, preparacion, tiempo, foto: this.imagen, visualizar: false }

		//this.onAgregar.emit(receta)
		this.recetaService.agregarReceta(receta)
		//this.logService.escribir("Nueva receta", "error")

		this.imagen = undefined
		this.router.navigate(["recetas"])
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
