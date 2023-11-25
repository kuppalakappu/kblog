import { Component } from '@angular/core';
import type { Menu } from './mydocs.types';

@Component({
	selector: 'app-mydocs',
	templateUrl: './mydocs.component.html',
	styleUrls: ['./mydocs.component.scss'],
})
export class MydocsComponent {
	docList: Menu[] = [
		{
			title: 'HTMLone',
			path: 'https://docs.google.com/document/d/e/2PACX-1vQRl5UtOTv16LUBNAd5pDS7GhEg186fvlKrxfgqqFhQHztHKF56KY7E7q6K1_x5tDyCyo-y2-vvQgMI/pub',
		},
		{
			title: 'HTMLTwo',
			path: 'https://docs.google.com/document/d/e/2PACX-1vQRl5UtOTv16LUBNAd5pDS7GhEg186fvlKrxfgqqFhQHztHKF56KY7E7q6K1_x5tDyCyo-y2-vvQgMI/pub',
		},
		{
			title: 'HTMLThree',
			path: 'https://docs.google.com/document/d/e/2PACX-1vQRl5UtOTv16LUBNAd5pDS7GhEg186fvlKrxfgqqFhQHztHKF56KY7E7q6K1_x5tDyCyo-y2-vvQgMI/pub',
		},
	];

	selectedMenu: Menu = this.docList[0];
	setMenu(menu: Menu) {
		this.selectedMenu = menu;
		window.location.href = menu.path;
	}
}
