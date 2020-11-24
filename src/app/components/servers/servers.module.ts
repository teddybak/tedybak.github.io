import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServersRoutingModule } from './servers-routing.module';
import { ServersComponent } from './servers.component';


@NgModule({
  declarations: [ServersComponent],
  imports: [
    CommonModule,
    ServersRoutingModule
  ]
})
export class ServersModule { }
