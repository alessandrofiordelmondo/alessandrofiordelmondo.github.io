import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonGrid, IonRow, IonCol, IonItem, IonLabel, IonImg, IonTitle, IonText } from '@ionic/angular/standalone';
import { EducationResearch, Personal, Profile, OtherWorkExperience, Teaching } from 'src/app/models/profile.model.';
import { ProfileService } from 'src/app/services/profile';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
  standalone: true,
  imports: [IonContent, CommonModule, FormsModule, IonGrid, IonRow, IonCol, IonItem, IonLabel, IonImg, IonTitle, IonText]
})
export class AboutPage implements OnInit {

  data!: Profile;
  personal!: Personal;
  educationResearch!: EducationResearch[];
  teaching!: Teaching[];
  otherWorkExperience!: OtherWorkExperience[];
  biongraphy: string = "";

  constructor(private profileService: ProfileService) {}

  ngOnInit() {
    this.profileService.getProfile().subscribe((data: Profile) => {
      
      this.data = data;
      this.personal = data.personal;
      this.educationResearch = data.educationResearch;
      this.teaching = data.teaching;
      this.otherWorkExperience = data.otherWorkExperience;

      // console.log(this.teaching)

    })
  }

}
