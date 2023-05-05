import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit{

	products: Array<Product> = []

	displayedColumns: string[] = ['id', 'name', 'price', 'action']

	constructor(private productService: ProductService) {}

	ngOnInit(): void {
		this.productService.read().subscribe(products => {
			this.products = products
			console.log(this.products)
		})
	}
}
