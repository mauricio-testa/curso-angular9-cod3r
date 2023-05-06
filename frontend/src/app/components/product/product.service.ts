import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'
import { Product } from './product.model';
import { EMPTY, Observable, catchError, map } from 'rxjs';

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

	index(): Observable<Array<Product>> {
		return this.http.get<Array<Product>>(this.baseUrl).pipe(
			map((obj) => obj),
			catchError((e) => this.errorHandler(e))
		)
	}

	create(product: Product): Observable<Product> {
		return this.http.post<Product>(this.baseUrl, product).pipe(
			map((obj) => obj),
			catchError((e) => this.errorHandler(e))
		)
	}

	get(id: number): Observable<Product> {
		return this.http.get<Product>(`${this.baseUrl}/${id}`).pipe(
			map((obj) => obj),
			catchError((e) => this.errorHandler(e))
		)
	}

	update(product: Product): Observable<Product> {
		return this.http.put<Product>(`${this.baseUrl}/${product.id}`, product).pipe(
			map((obj) => obj),
			catchError((e) => this.errorHandler(e))
		)
	}

	delete(id: number): Observable<Product> {
		return this.http.delete<Product>(`${this.baseUrl}/${id}`).pipe(
			map((obj) => obj),
			catchError((e) => this.errorHandler(e))
		)
	}

	showMessage(msg: string, isError: boolean = false): void {
		this.snackBar.open(msg, 'X', {
			duration: 30000,
			horizontalPosition: "right",
			verticalPosition: "top",
			panelClass: isError ? 'toast-error' : 'toast-success'
		})
	}

	errorHandler(e: any): Observable<any> {
		this.showMessage(e.message, true)
		return EMPTY
	}
}
