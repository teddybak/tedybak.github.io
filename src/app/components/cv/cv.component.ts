import { HttpClient } from '@angular/common/http'
import { Component, OnInit } from '@angular/core'

import { DataService } from './../services/data.service'

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {
  selectedRow: number;
  public elements: any = [];

  constructor(private http: HttpClient, public dataServicec: DataService) { }

  ngOnInit() {
    this.dataServicec.getCompanyDetaills().subscribe((elemento) => {
      this.elements = elemento
    })
  }


  headElements = ['#', 'Company', 'Start', 'End', 'Environment', 'Description', 'Position', 'Duties'];



  perform(valor) {
    this.dataServicec.propagarValor(valor)
    this.selectedRow = valor;
  }





}
