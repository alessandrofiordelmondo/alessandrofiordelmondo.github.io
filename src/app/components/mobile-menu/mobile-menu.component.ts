import { Component} from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonMenu, IonContent, IonList, IonItem, IonMenuToggle } from '@ionic/angular/standalone';

@Component({
  selector: 'app-mobile-menu',
  standalone: true,
  templateUrl: './mobile-menu.component.html',
  styleUrls: ['./mobile-menu.component.scss'],
  imports: [RouterLink, IonMenu, IonContent, IonList, IonItem, IonMenuToggle]
})
export class MobileMenuComponent {}
