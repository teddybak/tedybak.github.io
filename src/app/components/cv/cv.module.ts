import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { CompanyDetailsComponent } from './../company-details/company-details.component'
import { CvRoutingModule } from './cv-routing.module'
import { CvComponent } from './cv.component'

@NgModule({
  declarations: [CvComponent, CompanyDetailsComponent],
  imports: [
    CommonModule,
    CvRoutingModule,

  ]
})
export class CvModule { }
