import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../peliculas.service';
import { IPelicula } from '../ipelicula';

@Component({
	selector: 'app-listado',
	templateUrl: './listado.component.html',
	styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

	peliculas: Array<IPelicula>

	constructor(private peliculasService: PeliculasService) { }

	ngOnInit() {
		this.peliculas = this.peliculasService.listar()
	}

}
