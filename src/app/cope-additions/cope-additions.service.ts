import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { Project } from './project';
import { PROJECTS } from './project-details';

@Injectable({
  providedIn: 'root',
})
export class CopeAdditionsService {

  constructor() { }

  getProjects(): Observable<Project[]> {
    return of(PROJECTS);
  }

  getProject(id: number | string) {
    return this.getProjects().pipe(
      // (+) before `id` turns the string into a number
      map((projects: Project[]) => projects.find(project => project.id === +id))
    );
  }
}
