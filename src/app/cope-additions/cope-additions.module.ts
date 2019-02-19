import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectComponent } from './project/project.component';

import { ProjectRoutingModule } from './project-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ProjectRoutingModule
  ],
  declarations: [
    ProjectListComponent,
    ProjectComponent
  ]
})
export class CopeAdditionsModule {}
