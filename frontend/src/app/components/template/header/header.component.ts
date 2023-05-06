import { Component } from '@angular/core';
import { HeaderService } from './header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
	logoUrl: String = 'assets/img/logo.png';

	constructor(private headerService: HeaderService) { }

	get title(): string {
		return this.headerService.headerData.title
	}
	get icon(): string {
		return this.headerService.headerData.icon
	}
	get routeUrl(): string {
		return this.headerService.headerData.routeUrl
	}
}
