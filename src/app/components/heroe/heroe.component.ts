import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  heroe = {
    nombre:'Tony Stark',
    edad:45
  }

  constructor() { }

  ngOnInit(): void {
  }

  cambiarNombre(){
    this.heroe.nombre = 'Spiderman';
  }

  cambiarEdad(){
    this.heroe.edad = 30;
  }

}
