import { Component, OnInit, Injectable } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';

import { LotService9 } from './lots9.service';

import { Lot } from '../lot';

@Component({
  selector: 'app-lot9',
  templateUrl: '../lot.component.html',
  styleUrls: ['../lot.component.css']
})

@Injectable()
export class LotComponent9 implements OnInit {
  selectedImage: string;
  lot$: Observable<Lot>;
  project$: Observable<Lot>;
  default: boolean;


  constructor(
    private route: ActivatedRoute,
    private service: LotService9,
    public sanitizer: DomSanitizer
  ) {
    this.default= true;
  }

  ngOnInit() {
    this.lot$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.service.getLot(params.get('url')))
    );
  }

  toggleSelect(image) {
    this.selectedImage = image;
    this.default = false;
  }

  builderHTML(lot) {
    return this.sanitizer.bypassSecurityTrustHtml(lot.Builder);
  }
  mlsURL(lot) {
    return this.sanitizer.bypassSecurityTrustUrl(lot.MLS);
  }
  restrictionsURL(lot) {
    return this.sanitizer.bypassSecurityTrustUrl(lot.CCR);
  }
}
