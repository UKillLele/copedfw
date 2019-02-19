import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CopeAdditionsService } from '../../cope-additions/cope-additions.service'
import { Project } from '../../cope-additions/project'

@Component({
  selector: 'project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
  export class ProjectListComponent implements OnInit {
  projects$: Observable<Project[]>;
  selectedId: number;

  constructor(
    private service: CopeAdditionsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.projects$ = this.route.paramMap.pipe(
      switchMap(params => {
        this.selectedId = +params.get('id');
        return this.service.getProjects();
      })
    );
  }
}
