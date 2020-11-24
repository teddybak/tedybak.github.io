import { HttpClient } from '@angular/common/http'
import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

import { DataService } from './../services/data.service'

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.scss']
})
export class CompanyDetailsComponent implements OnInit {
  id: number;
  public data: any = [];
  constructor(private route: ActivatedRoute, private http: HttpClient, public dataService: DataService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.id = parseInt(params.get('id'));
    });

    this.dataService.getCompanyDetaills().subscribe((elemento) => {
      this.data = elemento;
    })

  }
  showDetails() {
    this.dataService.getCompanyDetaills().subscribe((elemento) => {
      this.data = elemento[this.id - 1];
    });
  }

  givemeData() {
    return this.data[this.id - 1]
  }

}
