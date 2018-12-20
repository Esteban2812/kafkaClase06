import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../peliculas.service';
import { IPelicula } from '../ipelicula';

@Component({
	selector: 'app-formulario',
	templateUrl: './formulario.component.html',
	styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

	imagen: string

	constructor(private peliculasService: PeliculasService) { }

	ngOnInit() {
	}

	seleccionArchivo(file: File) {
		const fr: FileReader = new FileReader()
		fr.onloadend = respuesta => {
			this.imagen = (respuesta.currentTarget as FileReader).result.toString()
		}

		fr.readAsDataURL(file)
	}

	insertar(titulo: string, director: string, anno: number) {
		const pelicula: IPelicula = { titulo, director, anno, afiche: this.imagen, visualizar: false }

		this.peliculasService.agregar(pelicula)
	}



}
