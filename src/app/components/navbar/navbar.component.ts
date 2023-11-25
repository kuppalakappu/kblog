import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  menu = [
    'Html',
    'Css',
    'JavaScript',
    'C#',
    'SQL',
    'ANgular',
    '.Net',
    'Ssis',
    'Ssrs',
    'oops',
    'Azure',
    'Other',
  ];
  selectedMenu = '';
  selectedSubMenu = '';
  submenu = ['Docs', 'Videos', 'Urls', 'ReadMe'];
  setMenu(nav: string) {
    this.selectedMenu = nav;
  }
  setSubMenu(nav: string) {
    this.selectedSubMenu = nav;
  }
  close() {
    this.selectedMenu = '';
    this.selectedSubMenu = '';
  }
}
