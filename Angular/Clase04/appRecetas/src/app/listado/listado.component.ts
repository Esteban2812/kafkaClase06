import { Component, OnInit, Input } from '@angular/core';
import { IReceta } from '../receta.interface';
import { RecetaService } from '../receta.service';
import { LogService } from '../log.service';

@Component({
	selector: 'app-listado',
	templateUrl: './listado.component.html',
	styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

	//@Input("listadoRecetas") recetas: Array<IReceta>

	recetas: Array<IReceta>

	constructor(private recetaService: RecetaService/*, private logService: LogService*/) { }

	ngOnInit() {
		this.recetas = this.recetaService.listarRecetas()
		//this.logService.escribir("Lista recetas", "info")
	}

}
