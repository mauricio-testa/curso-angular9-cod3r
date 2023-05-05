import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { ProductComponent } from './views/product/product.component';
import { ProductCreateComponent } from './components/product/create/create.component';
import { ProductEditComponent } from './components/product/edit/edit.component';
import { ProductDeleteComponent } from './components/product/delete/delete.component';

const routes: Routes = [
	{
		path: "",
		component: HomeComponent
	},
	
	{
		path: "products",
		component: ProductComponent
	},
	{
		path: "products/create",
		component: ProductCreateComponent
	},
	{
		path: "products/edit/:id",
		component: ProductEditComponent
	},
	{
		path: "products/delete/:id",
		component: ProductDeleteComponent
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
