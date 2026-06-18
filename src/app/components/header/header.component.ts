import { Component } from '@angular/core';
import { IonHeader, IonButtons, IonButton, IonToolbar, IonTitle, IonMenuButton } from "@ionic/angular/standalone";
import { RouterLink, Router} from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [IonHeader, IonButtons, IonButton, IonToolbar, IonTitle, RouterLink, IonMenuButton],
})
export class HeaderComponent {
    constructor(public router: Router) {}
}
