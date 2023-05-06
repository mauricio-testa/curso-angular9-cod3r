import { Component } from '@angular/core';
import { Router } from '@angular/router'
import { HeaderService } from 'src/app/components/template/header/header.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

	// o angular automaticamente vai injetar o @angular/router porque router é do tipo Router que foi importado
	constructor(private router: Router, private headerService: HeaderService) {
		headerService.headerData = {
			title: 'Produtos',
			icon: 'storefront',
			routeUrl: ''
		}
	}

	navigateToProductCreate(): void {
		this.router.navigate(['products/create'])
	}
}
