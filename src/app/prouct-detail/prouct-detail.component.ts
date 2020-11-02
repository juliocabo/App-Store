import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-prouct-detail',
  templateUrl: './prouct-detail.component.html',
  styleUrls: ['./prouct-detail.component.scss']
})
export class ProuctDetailComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private productService: ProductsService
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      const id = params.id;
      const product = this.productService.getProduct(id);
      console.log(id);
    });
  }

}
