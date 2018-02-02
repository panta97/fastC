import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  centimos: number;
  result: string;

  constructor() { }

  ngOnInit() {
    
  }

  calcular() {
    this.result = (0.1 * this.centimos).toFixed(1);
    console.log(this.result)
  }

}
