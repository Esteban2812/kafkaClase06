import { IReceta } from "./receta.interface";
import { LogService } from "./log.service";
import { Injectable } from "@angular/core";

@Injectable({
	"providedIn": "root"
})
export class RecetaService {
	private recetas: Array<IReceta> = []

	constructor(private logService: LogService) { }

	agregarReceta(receta: IReceta) {
		this.recetas.push(receta)
		this.logService.escribir("nueva receta", "info")
	}

	listarRecetas() {
		this.logService.escribir("listar recetas", "error")
		return this.recetas
	}
}