import { Component, OnInit } from '@angular/core';
import { IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonRow, IonCol, IonItem, IonLabel, IonImg } from '@ionic/angular/standalone';
import { HeaderComponent } from '../components/header/header.component';
import { ProfileService } from '../services/profile';
import { Profile } from '../models/profile.model.';

// import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
// import { register } from 'swiper/element/bundle';

// import { RouterLink } from '@angular/router';

// register();

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [HeaderComponent, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonRow, IonCol, IonItem, IonLabel, IonImg]
  // schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomePage implements OnInit {

  constructor(private profileService: ProfileService) {}

  data?: Profile;

  ngOnInit(){
    this.profileService.getProfile().subscribe((data:Profile) => {
      this.data = data;

      // console.log(data.exhibition)
    })
  }
  
}
