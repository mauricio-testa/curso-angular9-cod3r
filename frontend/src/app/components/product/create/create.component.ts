import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

	product: Product = {
		name: '',
		price: 0
	}

	constructor(private productService: ProductService, private router: Router) {}

	ngOnInit(): void {

	}

	createProduct(): void {
		this.productService.create(this.product).subscribe(() => {
			this.productService.showMessage('Executado com sucesso')
			this.router.navigate(['products'])
		})
	}

	cancel(): void {
		this.router.navigate(['products'])
	}

}
