import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-relationships',
  templateUrl: './relationships.component.html',
  styleUrls: ['./relationships.component.css']
})

@Injectable()
export class RelationshipsComponent implements OnInit {
  company: Object;

  constructor(private http: HttpClient) {
    this.http
      .get('/assets/relationships.json')
      .subscribe(company => {
        this.company = company;
      });
  }
  ngOnInit() {
  }

}
