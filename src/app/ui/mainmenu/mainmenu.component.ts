import {Component, Input} from '@angular/core';

@Component({
  selector: 'menu-main',
  templateUrl: 'mainmenu.component.html',
  styleUrls: ['mainmenu.component.css']
})
export class MainMenuComponent {
  @Input() items: string[];
  // TODO : add the class active for the first item by default
  activeIndex = 0;
}
