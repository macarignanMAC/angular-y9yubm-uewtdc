import { Component, OnInit , Input,  Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent implements OnInit {
@Input() product;
@Output()  [routerLink]="['/products', productId]" = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}