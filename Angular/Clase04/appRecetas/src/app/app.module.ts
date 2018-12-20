import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormularioComponent } from './formulario/formulario.component';
import { ListadoComponent } from './listado/listado.component';
import { RecetaService } from './receta.service';
import { LogService } from './log.service';

@NgModule({
	declarations: [
		AppComponent,
		FormularioComponent,
		ListadoComponent
	],
	imports: [
		BrowserModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
