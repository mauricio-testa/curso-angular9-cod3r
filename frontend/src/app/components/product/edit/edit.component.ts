import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class ProductEditComponent {
	product: Product = {
		name: '',
		price: 0
	}

	constructor(
		private productService: ProductService, 
		private router: Router, 
		private route: ActivatedRoute
	) {}

	ngOnInit(): void {
		const id = Number(this.route.snapshot.paramMap.get('id'))
		this.productService.get(id).subscribe(product => {
			this.product = product
		})
	}

	updateProduct(): void {
		this.productService.update(this.product).subscribe(() => {
			this.productService.showMessage('Atualizado com sucesso')
			this.router.navigate(['products'])
		})
	}

	cancel(): void {
		this.router.navigate(['products'])
	}
}
