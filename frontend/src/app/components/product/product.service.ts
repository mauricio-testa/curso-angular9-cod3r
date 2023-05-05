import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'
import { Product } from './product.model';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root' // Pode ser injetado em toda a aplicação
})

// ESSA CLASSE É UM SINGLETON! Vai ter uma instancia só compartilhada em todo o projeto

export class ProductService {

	baseUrl = 'http://localhost:3000/products';

	constructor(
		private snackBar: MatSnackBar,
		private http: HttpClient
	) { }

	read(): Observable<Array<Product>> {
		return this.http.get<Array<Product>>(this.baseUrl);
	}

	create(product: Product): Observable<Product> {
		return this.http.post<Product>(this.baseUrl, product)
	}

	showMessage(msg: string): void {
		this.snackBar.open(msg, 'X', {
			duration: 3000,
			horizontalPosition: "right",
			verticalPosition: "top"
		})
	}
}
