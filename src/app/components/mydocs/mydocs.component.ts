import { Component } from '@angular/core';

@Component({
  selector: 'app-mydocs',
  templateUrl: './mydocs.component.html',
  styleUrls: ['./mydocs.component.scss'],
})
export class MydocsComponent {
  menuList = ['sqlnote', 'cnote', 'htmlnote'];

  selectedMenu: string = this.menuList[0];
  docList = [
    {
      title: 'HTMLone',
      path: 'https://docs.google.com/document/d/1QPIvAFMHtuQh04FjUrbFD-2SNSjW4zs1TGSPtiNxfNY/edit?usp=sharing',
    },
    {
      title: 'HTMLTwo',
      path: 'https://docs.google.com/document/d/15jzMXPjuVZB8P9bmkQfvko5JUi-s_E8_M6VcgLMBpCk/edit',
    },
    {
      title: 'HTMLThree',
      path: '../../../assets/docs/SQL Quick Ref.docs&embedded=true',
    },
  ];
  setMenu(menu: string) {
    this.selectedMenu = menu;
  }
}
