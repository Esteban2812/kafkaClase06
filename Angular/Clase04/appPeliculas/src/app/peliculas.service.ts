import { Injectable } from '@angular/core';
import { IPelicula } from './ipelicula';

@Injectable({
	providedIn: 'root'
})
export class PeliculasService {
	private peliculas: IPelicula[] = []

	constructor() { }

	agregar(pelicula: IPelicula) {
		this.peliculas.push(pelicula)
	}

	listar() {
		return this.peliculas
	}
}
