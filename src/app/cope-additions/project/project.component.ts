import { Component, OnInit, Injectable } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';

import { CopeAdditionsService } from '../cope-additions.service';
import { Project } from '../project';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})

@Injectable()
export class ProjectComponent implements OnInit {
  display: boolean;
  display1: boolean;
  selectedImage: string;
  imageTitle:string;
  project$: Observable<Project>;
  first: boolean;


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: CopeAdditionsService,
    public sanitizer: DomSanitizer
  ) {
    this.first = true;
    this.display = false;
    this.display1 = false;
  }

  ngOnInit() {
    this.project$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.service.getProject(params.get('id')))
    );
  }

  gotoProjects(project: Project) {
    let projectId = project ? project.id : null;
    this.router.navigate(['/cope-additions', { id: projectId }]);
  }

  toggleSelect(image: string) {
    this.selectedImage = image[0];
    this.imageTitle = image[1];
    this.first = false;
  }

  openLot() {
    if (window.innerWidth >= 1023) {
      this.display = true;
    }
  }

  defaultSelect() {
    this.selectedImage = '';
    this.first = true;
  }

  imageHTML(project: { LargeDefault: string; }) {
    return this.sanitizer.bypassSecurityTrustHtml(project.LargeDefault);
  }

  colorStyle(project: { Color: string; }) {
    return this.sanitizer.bypassSecurityTrustStyle(project.Color);
  }

  mapURL(project: { Map: string; }) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(project.Map);
  }

  svgHTML(project: { SVG: string; SVGMobile: string; }) {
    if (window.innerWidth >= 1023) {
      return this.sanitizer.bypassSecurityTrustHtml(project.SVG);
    } else {
      return this.sanitizer.bypassSecurityTrustHtml(project.SVGMobile);
    }
  }

  svgStyle(project: { SVGStyle: string; }) {
    return this.sanitizer.bypassSecurityTrustStyle(project.SVGStyle);
  }

  factHTML(fact: string) {
    return this.sanitizer.bypassSecurityTrustHtml(fact)
  }

  contactStyle(project: { ContactImage: string; }) {
    return this.sanitizer.bypassSecurityTrustStyle(project.ContactImage);
  }

  buttonUrl(project: { ButtonLink: string; }) {
    return this.sanitizer.bypassSecurityTrustUrl(project.ButtonLink);
  }

  logoStyle(project: { AdditionLogo: string; }) {
    return this.sanitizer.bypassSecurityTrustStyle(project.AdditionLogo);
  }
}
