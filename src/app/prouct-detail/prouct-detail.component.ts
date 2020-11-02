import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductsService } from '../products.service';
import { Product } from '../product.model';

@Component({
  selector: 'app-prouct-detail',
  templateUrl: './prouct-detail.component.html',
  styleUrls: ['./prouct-detail.component.scss']
})
export class ProuctDetailComponent implements OnInit {

  product: Product;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductsService
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      const id = params.id;
      this.product = this.productService.getProduct(id);
    });
  }

}
