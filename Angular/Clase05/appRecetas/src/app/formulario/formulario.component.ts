import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IReceta } from '../receta.interface';
import { RecetaService } from '../receta.service';
import { LogService } from '../log.service';
import { Router } from '@angular/router';
import { ICanDeactivate } from '../can-deactivate.interface';

@Component({
	selector: 'app-formulario',
	templateUrl: './formulario.component.html',
	styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit, ICanDeactivate {

	//@Output() onAgregar = new EventEmitter<IReceta>()

recetaOriginal: IReceta = {
  titulo:"",
  ingredientes: "",
  preparacion: "",
  tiempo: 0,
  foto: "",
  visualizar: false
}

recetaModificada: IReceta=Object.assign({},this.recetaOriginal)

	constructor(private recetaService: RecetaService, private router: Router/*, private logService: LogService*/) { }

	ngOnInit() {
	}

	imagen: string

	agregarReceta(titulo: string, ingredientes: string, preparacion: string, tiempo: number) {
    this.recetaModificada.foto = this.imagen
    this.recetaModificada.visualizar = false
		const receta: IReceta = this.recetaModificada //{ titulo, ingredientes, preparacion, tiempo, foto: this.imagen, visualizar: false }

    //this.recetaModificada=receta;

		//this.onAgregar.emit(receta)
		this.recetaService.agregarReceta(this.recetaModificada)
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

  canDeactivateComponente():boolean{
    let cambiado=false;
    //checar si la data en un formulario ha cambiado
    //enm este metodo hay que comparar los valores de los jsos
    for(let prop in this.recetaOriginal){
      if(this.recetaOriginal[prop]!=this.recetaModificada[prop]){
        cambiado=true;
      }
    }
    return cambiado;
  }



}
