import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectComponent } from './project/project.component';
import { ManufacturedComponent } from './project/manufactured/manufactured.component';

const projectRoutes: Routes = [
  { path: 'cope-additions',  component: ProjectListComponent },
  { path: 'cope-additions/:id', component: ProjectComponent },
  { path: 'house-selection', component: ManufacturedComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(projectRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ProjectRoutingModule { }
