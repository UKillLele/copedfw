import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

import { CopeAdditionsService } from '../cope-additions/cope-additions.service'
import { Project } from '../cope-additions/project'

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
  export class NavBarComponent implements OnInit {
  show: boolean;
  projects$: Observable<Project[]>;
  selectedId: number;

  constructor(
    private service: CopeAdditionsService,
    private route: ActivatedRoute
  ) {
    this.show = false;
  }

  ngOnInit() {
    this.projects$ = this.route.paramMap.pipe(
      switchMap(params => {
        this.selectedId = +params.get('id');
        return this.service.getProjects();
      })
    )
  }

  toggle(): void {
    this.show = !this.show;
  }


}
