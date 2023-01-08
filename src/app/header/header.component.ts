import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() showMenu: boolean = false;
  @Output() changeMenu = new EventEmitter<boolean>();

  changeMenuFunction(){
    this.changeMenu.emit(true);
  }
}
