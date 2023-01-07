import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio';

  public showMenu: boolean = false;

  menuChanges(opened: boolean){
    this.showMenu = opened;
  } 
}
