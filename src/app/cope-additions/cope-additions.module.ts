import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectComponent } from './project/project.component';

import { ProjectRoutingModule } from './project-routing.module';
import { ManufacturedComponent } from './project/manufactured/manufactured.component';

@NgModule({
  imports: [
    CommonModule,
    ProjectRoutingModule
  ],
  declarations: [
    ProjectListComponent,
    ProjectComponent,
    ManufacturedComponent
  ]
})
export class CopeAdditionsModule {}
