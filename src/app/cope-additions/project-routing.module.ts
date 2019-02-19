import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectComponent } from './project/project.component';

const projectRoutes: Routes = [
  { path: 'cope-additions',  component: ProjectListComponent },
  { path: 'cope-additions/:id', component: ProjectComponent }
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
