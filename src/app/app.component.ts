import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { HeaderComponent } from "./components/header/header.component";
import { MobileMenuComponent } from './components/mobile-menu/mobile-menu.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet, HeaderComponent, MobileMenuComponent],
})
export class AppComponent {
  constructor() {}
}
