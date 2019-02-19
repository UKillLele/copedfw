import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})

@Injectable()
export class AboutComponent implements OnInit {
  persons: Object;

  constructor(private http: HttpClient) {
    this.http
      .get('/assets/cope-team-members.json')
      .subscribe(persons => {
        this.persons = persons;
      });
  }
  ngOnInit() {
  }

}
