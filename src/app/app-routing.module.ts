import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import {
  CompanyDetailsComponent,
} from './components/company-details/company-details.component'
import { CvComponent } from './components/cv/cv.component'
import { HomeComponent } from './components/home/home.component'

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'cv', component: CvComponent, children: [{ path: 'details/:id', component: CompanyDetailsComponent }] },
  { path: 'development', loadChildren: () => import('./components/development/development.module').then(m => m.DevelopmentModule) },
  { path: 'cloud', loadChildren: () => import('./components/cloud/cloud.module').then(m => m.CloudModule) },
  { path: 'servers', loadChildren: () => import('./components/servers/servers.module').then(m => m.ServersModule) },
  { path: 'services', loadChildren: () => import('./components/services/services.module').then(m => m.ServicesModule) },
  { path: 'about', loadChildren: () => import('./components/about/about.module').then(m => m.AboutModule) },
  { path: '', redirectTo: '/home', pathMatch: 'full' },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
