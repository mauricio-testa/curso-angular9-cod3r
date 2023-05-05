import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class ProductDeleteComponent {
	product: Product = {
		name: '',
		price: 0
	}

	id: string

	constructor(
		private productService: ProductService, 
		private router: Router, 
		private route: ActivatedRoute
	) {
		this.id = this.route.snapshot.paramMap.get('id') || ''
	}

	ngOnInit(): void {
		this.productService.get(this.id).subscribe(product => {
			this.product = product
		})
	}

	deleteProduct(): void {
		this.productService.delete(this.id).subscribe(() => {
			this.productService.showMessage('Deletado com sucesso')
			this.router.navigate(['products'])
		})
	}

	cancel(): void {
		this.router.navigate(['products'])
	}
}
