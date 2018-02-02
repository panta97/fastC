import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  centimos: number;
  result: string;

  unidad = {
    diez: null,
    vein: null,
    unso: null,
    doso: null,
    cinco: null,
    diezso: null,
    veinso: null,
    cincuso: null,
    cienso: null,
    dosciso: null
  }

  denom = {
    diez: 0.1,
    vein: 0.2,
    unso: 1,
    doso: 2,
    cinco: 5,
    diezso: 10,
    veinso: 20,
    cincuso: 50,
    cienso: 100,
    dosciso: 200
  }

  monto = {
    '0.1': '0.00',
    '0.2': '0.00',
    '1': '0.00',
    '2': '0.00',
    '5': '0.00',
    '10': '0.00',
    '20': '0.00',
    '50': '0.00',
    '100': '0.00',
    '200': '0.00'
  }

  constructor() { }

  ngOnInit() {
    
  }

  calcular(denom, unidad) {
    this.monto[denom] = (denom * unidad).toFixed(2);
    // console.log(this.result)
    console.log(this.monto['0.1'])
  }

  clearAll() {
    for(var key in this.unidad) {
      this.unidad[key] = null;
      this.calcular(this.denom[key], 0);
    }
  }

}
