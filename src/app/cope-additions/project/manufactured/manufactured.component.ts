import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-manufactured',
  templateUrl: './manufactured.component.html',
  styleUrls: ['./manufactured.component.css']
})
export class ManufacturedComponent implements OnInit {
  display = false;
  dev = 139000;
  plat = 0;
  model = 0;
  floorplan = 0;
  door = 0;
  floor = 0;
  appl = 0;
  ins = 0;
  addgarage = 0;
  backshed = 0;
  decking = 0;
  yardupg = 0;
  flowers = 0;
  sprinklers = 0;

  constructor() {
  }

  ngOnInit() {
  }

  openFP() {
    if (window.innerWidth >= 1023) {
      this.display = true;
    }
  }

  plat8(lot: string, price: number) {
    this.plat = price;
    var next = document.getElementById('model');
    var end = document.getElementById('lot-price');
    document.getElementById('lot-selection').innerHTML = '<span style="border: 3px solid #f00; padding: 2px;">' + lot;
    var priceString = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    end.innerHTML = 'lot premium: $' + priceString;
    this.nextFn(next, end);
    this.total();
  }

  wModel() {
    this.model = 85900;
    var next = document.getElementById('floorplan');
    var end = document.getElementById('model-price');
    document.getElementById('williamsburg-upgrades').style.display = 'flex';
    document.getElementById('concord-upgrades').style.display = 'none';
    document.getElementById('richmond-upgrades').style.display = 'none';
    document.getElementById('deerfield-upgrades').style.display = 'none';
    this.nextFn(next, end);
    this.total();
  }

  cModel() {
    this.model = 80900;
    var next = document.getElementById('floorplan');
    var end = document.getElementById('model-price');
    document.getElementById('williamsburg-upgrades').style.display = 'none';
    document.getElementById('concord-upgrades').style.display = 'flex';
    document.getElementById('richmond-upgrades').style.display = 'none';
    document.getElementById('deerfield-upgrades').style.display = 'none';
    this.nextFn(next, end);
    this.total();
  }

  rModel() {
    this.model = 75900;
    var next = document.getElementById('floorplan');
    var end = document.getElementById('model-price');
    document.getElementById('williamsburg-upgrades').style.display = 'none';
    document.getElementById('concord-upgrades').style.display = 'none';
    document.getElementById('richmond-upgrades').style.display = 'flex';
    document.getElementById('deerfield-upgrades').style.display = 'none';
    this.nextFn(next, end);
    this.total();
  }

  dModel() {
    this.model = 70900;
    var next = document.getElementById('floorplan');
    var end = document.getElementById('model-price');
    document.getElementById('williamsburg-upgrades').style.display = 'none';
    document.getElementById('concord-upgrades').style.display = 'none';
    document.getElementById('richmond-upgrades').style.display = 'none';
    document.getElementById('deerfield-upgrades').style.display = 'flex';
    this.nextFn(next, end);
    this.total();
  }

  wFloorplan(price: number) {
    this.floorplan = price;
    var next = document.getElementById('trim');
    var end = document.getElementById('plan-price');
    var priceString = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    end.innerHTML = 'Floorplan upgrade: $' + priceString;
    document.getElementById('williamsburg-trim').style.display = 'flex';
    document.getElementById('concord-trim').style.display = 'none';
    document.getElementById('richmond-trim').style.display = 'none';
    document.getElementById('deerfield-trim').style.display = 'none';
    var next = document.getElementById('trim');
    this.nextFn(next, end);
    this.total();
  }

  cFloorplan(price: number) {
    this.floorplan = price;
    var next = document.getElementById('trim');
    var end = document.getElementById('plan-price');
    var priceString = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    end.innerHTML = 'Floorplan upgrade: $' + priceString;
    document.getElementById('williamsburg-trim').style.display = 'none';
    document.getElementById('concord-trim').style.display = 'flex';
    document.getElementById('richmond-trim').style.display = 'none';
    document.getElementById('deerfield-trim').style.display = 'none';
    this.nextFn(next, end);
    this.total();
  }

  rFloorplan(price: number) {
    this.floorplan = price;
    var next = document.getElementById('trim');
    var end = document.getElementById('plan-price');
    var priceString = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    end.innerHTML = 'Floorplan upgrade: $' + priceString;
    document.getElementById('williamsburg-trim').style.display = 'none';
    document.getElementById('concord-trim').style.display = 'none';
    document.getElementById('richmond-trim').style.display = 'flex';
    document.getElementById('deerfield-trim').style.display = 'none';
    this.nextFn(next, end);
    this.total();
  }

  dFloorplan(price: number) {
    this.floorplan = price;
    var next = document.getElementById('trim');
    var end = document.getElementById('plan-price');
    var priceString = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    end.innerHTML = 'Floorplan upgrade: $' + priceString;
    document.getElementById('williamsburg-trim').style.display = 'none';
    document.getElementById('concord-trim').style.display = 'none';
    document.getElementById('richmond-trim').style.display = 'none';
    document.getElementById('deerfield-trim').style.display = 'flex';
    this.nextFn(next, end);
    this.total();
  }

  trim() {
  var next = document.getElementById('ext-color');
  var end = document.getElementById('trim-price');
  this.nextFn(next, end);
  }

  extColor() {
  var next = document.getElementById('skirt');
  var end = document.getElementById('ext-price');
  this.nextFn(next, end);
  }

  skirt() {
  var next = document.getElementById('front-door');
  var end = document.getElementById('skirt-price');
  this.nextFn(next, end);
  }

  extDoor(price: number) {
    this.door = price;
    var next = document.getElementById('deck');
    var end = document.getElementById('door-price');
    var priceString = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    end.innerHTML = 'Door upgrade: $' + priceString;
    this.nextFn(next, end);
    this.total();
  }

  deck(price: number) {
    this.decking = price;
    var next = document.getElementById('int-color');
    var end = document.getElementById('deck-price');
    var priceString = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    end.innerHTML = 'Deck upgrade: $' + priceString;
    this.nextFn(next, end);
    this.total();
  }

  intColor() {
  var next = document.getElementById('kitchen');
  var end = document.getElementById('int-price');
  this.nextFn(next, end);
  }

  appliances(price: number) {
    this.appl = price;
    var next = document.getElementById('sink');
    var end = document.getElementById('appliance-price');
    var priceString = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    end.innerHTML = 'Appliance upgrade: $' + priceString;
    this.nextFn(next, end);
    this.total();
  }

  sink() {
  var next = document.getElementById('flooring');
  var end = document.getElementById('sink-price');
  this.nextFn(next, end);
  }

  flooring(price: number) {
    this.floor = price;
    var next = document.getElementById('insulation');
    var end = document.getElementById('floor-price');
    var priceString = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    end.innerHTML = 'Bedroom flooring upgrade: $' + priceString;
    this.nextFn(next, end);
    this.total();
  }

  insulation(price: number) {
    this.ins = price;
    var next = document.getElementById('garage');
    var end = document.getElementById('insulation-price');
    var priceString = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    end.innerHTML = 'Insulation upgrade: $' + priceString;
    this.nextFn(next, end);
    this.total();
  }

  garage(price: number) {
    this.addgarage = price;
    var next = document.getElementById('shed');
    var end = document.getElementById('garage-price');
    var priceString = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    end.innerHTML = 'Added garage: $' + priceString;
    this.nextFn(next, end);
    this.total();
  }

  shed(price: number) {
    this.backshed = price;
    var next = document.getElementById('yard');
    var end = document.getElementById('shed-price');
    var priceString = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    end.innerHTML = 'Added shed: $' + priceString;
    this.nextFn(next, end);
    this.total();
  }

  yard(price: number) {
    this.yardupg = price;
    var next = document.getElementById('flower-beds');
    var end = document.getElementById('yard-price');
    var priceString = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    end.innerHTML = 'Yard upgrade: $' + priceString;
    this.nextFn(next, end);
    this.total();
  }

  flower(price: number) {
    this.flowers = price;
    var next = document.getElementById('sprinkler');
    var end = document.getElementById('flower-price');
    var priceString = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    end.innerHTML = 'Added flower bed: $' + priceString;
    this.nextFn(next, end);
    this.total();
  }

  sprinkler(price: number) {
    this.sprinklers = price;
    var end = document.getElementById('sprinkler-price')
    var priceString = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    end.innerHTML = 'Added sprinkler system: $' + priceString;
    document.getElementById('submit').removeAttribute('disabled');
    this.total();
  }

  total() {
    var sum = this.dev + this.plat + this.model + this.floorplan + this.door + this.floor + this.appl + this.ins + this.addgarage + this.backshed + this.decking + this.yardupg + this.flowers + this.sprinklers;
    var sumString = sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    document.getElementById('total').innerHTML = 'Total: $' + sumString;
  }

  nextFn(next: HTMLElement, end: HTMLElement) {
    if(next.style.display !== 'block') {
      next.style.display = 'block';
      end.scrollIntoView({behavior:'smooth', block:'start'});
    }
  }

}
