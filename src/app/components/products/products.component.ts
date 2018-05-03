import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private productservice: ProductService) { }

  ngOnInit() {
    this.productservice.getProducts().subscribe(products => {
      console.log(products);
    });
  }

}
