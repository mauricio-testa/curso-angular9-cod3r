import { Component } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

	// o angular automaticamente vai injetar o @angular/router porque router é do tipo Router que foi importado
	constructor(private router: Router) { }

	navigateToProductCreate(): void {
		this.router.navigate(['products/create'])
	}
}
