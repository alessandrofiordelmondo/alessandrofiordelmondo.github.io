import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonContent, IonGrid, IonRow, IonCol, IonItem, IonLabel, IonImg } from '@ionic/angular/standalone';

import { ProfileService } from 'src/app/services/profile';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.page.html',
  styleUrls: ['./contacts.page.scss'],
  standalone: true,
  imports: [CommonModule, IonContent, IonGrid, IonRow, IonCol, IonItem, IonLabel, IonImg]
})
export class ContactsPage implements OnInit {

  personal: any;
  archive: any[] = [];

  constructor(private profileService: ProfileService) {}

  ngOnInit() {
    this.profileService.getProfile().subscribe(data => {
      this.personal = data.personal;
      // github repositories
      this.archive = data.archive.filter(
        (a: any) => a.type === 'repository'
      );
    });
  }
}