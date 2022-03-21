import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent implements OnInit {

  valor: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  operation(argumento: number){
    this.valor +=argumento;
  }

}
