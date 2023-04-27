import { Component } from '@angular/core';

// #3 esse é o componente renderizado por primeiro!
@Component({
  selector: 'app-root', // é esse seletor que está no index.html
  templateUrl: 'app.component.html',
})
export class AppComponent {
  nome = 'maria';
}
