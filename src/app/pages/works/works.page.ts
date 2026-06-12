import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonMenu, IonList, IonItem, IonRow, IonCol, IonLabel, IonImg } from '@ionic/angular/standalone';
import { HeaderComponent } from "src/app/components/header/header.component";
import { Profile } from 'src/app/models/profile.model.';
import { ProfileService } from 'src/app/services/profile';
import { IonAccordionGroup, IonAccordion } from '@ionic/angular/standalone';

@Component({
  selector: 'app-works',
  templateUrl: './works.page.html',
  styleUrls: ['./works.page.scss'],
  standalone: true,
  imports: [IonContent, CommonModule, FormsModule, HeaderComponent, IonMenu, IonList, IonItem, IonRow, IonCol, IonLabel, IonAccordionGroup, IonAccordion, IonImg]
})
export class WorksPage implements OnInit {

  data?: Profile

  constructor(private profileService: ProfileService) { }

   ngOnInit(){
    this.profileService.getProfile().subscribe((data:Profile) => {
      this.data = data;
      console.log(data.publication)
    })
  }

}
