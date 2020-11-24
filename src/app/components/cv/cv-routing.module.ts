import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { CompanyDetailsComponent } from './../company-details/company-details.component'
import { CvComponent } from './cv.component'

const routes: Routes = [{
  path: 'cv', component: CvComponent, children: [
    { path: 'details/:id', component: CompanyDetailsComponent }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CvRoutingModule { }
