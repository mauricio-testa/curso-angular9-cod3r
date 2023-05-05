import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/template/header/header.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component';
import { HomeComponent } from './views/home/home.component';
import { ProductComponent } from './views/product/product.component';
import { RedDirective } from './directives/red.directive';
import { ProductCreateComponent } from './components/product/create/create.component';
import { ProductIndexComponent } from './components/product/index/index.component';

import localePt from '@angular/common/locales/pt'
import { registerLocaleData } from '@angular/common'
registerLocaleData(localePt)

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    ProductComponent,
    RedDirective,
    ProductCreateComponent,
    ProductIndexComponent,
  ],
  imports: [ // como se fosse o components {} do vue
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
	MatToolbarModule,
	MatSidenavModule,
	MatListModule,
	MatCardModule,
	MatButtonModule,
	MatSnackBarModule,
	HttpClientModule,
	FormsModule,
	MatFormFieldModule,
	MatInputModule,
	MatTableModule
  ],
  providers: [{
	provide: LOCALE_ID,
	useValue: 'pt-BR'
  }],
  bootstrap: [AppComponent] // #2 O app.module.ts diz que o componente inicial é o AppComponent. Como se fosse o App.vue
})
export class AppModule { }
