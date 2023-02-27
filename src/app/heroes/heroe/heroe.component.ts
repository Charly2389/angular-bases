import { Component } from '@angular/core';
 

@Component({
    selector: "app-heroe",
    templateUrl: "heroe.component.html"
})
 

export class HeroeComponent {

    nombre : string = "IronMan";
    nombre2: string = " Tony Stark";
    edad   : number = 34;
    edad2  : number = 43;

    get nombreCapitalizado(): string{
        return this.nombre.toUpperCase();
    }

    
    obtenerNombre(): string {
        return ` ${this.nombre} - ${this.edad} `; 
        //return this.nombre + " - " + this.edad;
    }

    cambiarNombre () : void {
        this.nombre = this.nombre2;
    }

    cambiarEdad () : void {
        this.edad = this.edad2;
    } 
 }