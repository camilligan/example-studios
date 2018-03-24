import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  isNavbarCollapsed:boolean;
  
  title = 'Cali the Lab';
  
  constructor() {
    this.isNavbarCollapsed = true;
  }
}
