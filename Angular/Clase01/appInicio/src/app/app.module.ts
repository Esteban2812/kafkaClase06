import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PruebaComponent } from './prueba.component';

@NgModule({
	declarations: [
		AppComponent,
		PruebaComponent
	],
	imports: [
		BrowserModule
	],
	providers: [],
	bootstrap: [PruebaComponent]
})
export class AppModule { }
