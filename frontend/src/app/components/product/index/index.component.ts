import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class ProductIndexComponent implements OnInit{

	products: Array<Product> = []

	displayedColumns: string[] = ['id', 'name', 'price', 'action']

	constructor(private productService: ProductService) {}

	ngOnInit(): void {
		this.productService.index().subscribe(products => {
			this.products = products
			console.log(this.products)
		})
	}
}
