import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { ProductComponent } from './views/product/product.component';
import { ProductCreateComponent } from './components/product/create/create.component';

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
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
