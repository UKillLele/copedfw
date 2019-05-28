import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-manufactured',
  templateUrl: './manufactured.component.html',
  styleUrls: ['./manufactured.component.css']
})
export class ManufacturedComponent implements OnInit {
  display = false;
  dev = 0;
  plat = 0;
  model = 0;
  sum = 0;
  sumstring: string;

  constructor() {
  }

  ngOnInit() {
  }

  openFP() {
    if (window.innerWidth >= 1023) {
      this.display = true;
    }
  }

  development(price: number) {
    this.plat = 0;
    this.dev = price;
    document.getElementById('lot-selection8').innerHTML = ' ';
    document.getElementById('lot-selection7').innerHTML = ' ';
    this.total();
  }

  dev8(){
    document.getElementById('lot').style.display = 'block';
    document.getElementById('plat8').style.display = 'block';
    document.getElementById('plat7').style.display = 'none';
    if(document.getElementById('model').style.display !== 'block') {
      window.scrollTo(0,document.body.scrollHeight);
    }
    this.total();
  }

  dev7() {
    document.getElementById('lot').style.display = 'block';
    document.getElementById('plat8').style.display = 'none';
    document.getElementById('plat7').style.display = 'block';
    if(document.getElementById('model').style.display !== 'block') {
      window.scrollTo(0,document.body.scrollHeight);
    }
    this.total();
  }

  plat8(lot: string, price: number) {
    document.getElementById('lot-selection8').innerHTML = '<span style="border: 3px solid #f00; padding: 2px;">' + lot;
    document.getElementById('lot-price8').innerHTML = 'lot premium: $' + price;
    this.plat = price;
    document.getElementById('model').style.display = 'block';
    if(document.getElementById('trim').style.display !== 'block') {
      window.scrollTo(0,document.body.scrollHeight);
    }
    this.total();
  }

  plat7(lot: string, price: number) {
    document.getElementById('lot-selection7').innerHTML = '<span style="border: 3px solid #f00; padding: 2px;">' + lot;
    document.getElementById('lot-price7').innerHTML = 'lot premium: $' + price;
    this.plat = price;
    document.getElementById('model').style.display = 'block';
    if(document.getElementById('trim').style.display !== 'block') {
      window.scrollTo(0,document.body.scrollHeight);
    }
    this.total();
  }

  wModel() {
    this.model = 85900;
    this.total();
    document.getElementById('trim').style.display = 'block';
    document.getElementById('williamsburg-trim').style.display = 'flex';
    document.getElementById('concord-trim').style.display = 'none';
    document.getElementById('richmond-trim').style.display = 'none';
    document.getElementById('deerfield-trim').style.display = 'none';
    if(document.getElementById('ext-color').style.display !== 'block') {
      window.scrollTo(0,document.body.scrollHeight);
    }
    this.total();
  }

  cModel() {
    this.model = 80900;
    this.total();
    document.getElementById('trim').style.display = 'block';
    document.getElementById('williamsburg-trim').style.display = 'none';
    document.getElementById('concord-trim').style.display = 'flex';
    document.getElementById('richmond-trim').style.display = 'none';
    document.getElementById('deerfield-trim').style.display = 'none';
    if(document.getElementById('ext-color').style.display !== 'block') {
      window.scrollTo(0,document.body.scrollHeight);
    }
    this.total();
  }

  rModel() {
    this.model = 75900;
    this.total();
    document.getElementById('trim').style.display = 'block';
    document.getElementById('williamsburg-trim').style.display = 'none';
    document.getElementById('concord-trim').style.display = 'none';
    document.getElementById('richmond-trim').style.display = 'flex';
    document.getElementById('deerfield-trim').style.display = 'none';
    if(document.getElementById('ext-color').style.display !== 'block') {
      window.scrollTo(0,document.body.scrollHeight);
    }
    this.total();
  }

  dModel() {
    this.model = 70900;
    this.total();
    document.getElementById('trim').style.display = 'block';
    document.getElementById('williamsburg-trim').style.display = 'none';
    document.getElementById('concord-trim').style.display = 'none';
    document.getElementById('richmond-trim').style.display = 'none';
    document.getElementById('deerfield-trim').style.display = 'flex';
    if(document.getElementById('ext-color').style.display !== 'block') {
      window.scrollTo(0,document.body.scrollHeight);
    }
    this.total();
  }

  trim() {
    document.getElementById('ext-color').style.display = "block";
    if(document.getElementById('int-color').style.display !== 'block') {
      window.scrollTo(0,document.body.scrollHeight);
    }
  }

  extColor() {
    document.getElementById('int-color').style.display = "block";
    if(document.getElementById('front-door').style.display !== 'block') {
      window.scrollTo(0,document.body.scrollHeight);
    }
  }

  intColor() {
    document.getElementById('front-door').style.display = "block";
    if(document.getElementById('flooring').style.display !== 'block') {
      window.scrollTo(0,document.body.scrollHeight);
    }
  }

  total() {
    this.sum = this.dev + this.plat + this.model;
    this.sumstring = this.sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    document.getElementById('total').innerHTML = 'Total: $' + this.sumstring;
  }

}
