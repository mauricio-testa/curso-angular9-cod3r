import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
	constructor(private productService: ProductService, private router: Router) {}

	ngOnInit(): void {

	}

	createProduct(): void {
		this.productService.showMessage('Executado com sucesso')
	}

	cancel(): void {
		this.router.navigate(['products'])
	}

}
