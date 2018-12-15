import { Component } from '@angular/core';

@Component({
	selector: 'app-visualizar',
	templateUrl: './visualizar.component.html',
	styleUrls: ['./visualizar.component.css']
})
export class VisualizarComponent {
	curso: string = "FullStack"
	activo: boolean = true

	//cursos: Array<string>
	//cursos: string[]
	//cursos: any[]
	//cursos: Array<any>
	cursos: Array<string> = []

	nombreIngresado: string

	constructor() {
	}

	ngOnInit() {
		/*setInterval(() => {
			this.activo = !this.activo
		}, 1000)*/

	}

	registrar() {
		if (this.nombreIngresado) {
			this.cursos.unshift(this.nombreIngresado)
			console.log("Curso registrado")
			console.log(this.cursos)
		}


		/*for (let curso in this.cursos) {
			console.log("Curso ingresado", curso)
		}*/

		/*for (var i = 0; i < this.cursos.length; i++) {
			console.log("Curso ingresado", this.cursos[i])
		}

		this.cursos.forEach(function(el) {
			console.log("Curso ingresado", this.cursos[i])
		})

		while(){

		}

		do {

		} while()*/

	}

	nombreCurso(nombre) {
		this.nombreIngresado = nombre //evento.target.value
		this.activo = this.nombreIngresado ? false : true
		/*if(this.nombreIngresado) {
			this.activo = false
		} else {
			this.activo = true
		}*/
		//console.log(evento)
		//console.log(this.nombreIngresado)
	}

	eliminar(indiceElemento) {
		if (confirm("Esta seguro de eliminar?")) {
			this.cursos.splice(indiceElemento, 1)
		}
	}

}
