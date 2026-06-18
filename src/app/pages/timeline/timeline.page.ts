import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonContent } from '@ionic/angular/standalone';

import { ProfileService } from 'src/app/services/profile';

interface TimelineEntry {
  type: string;
  title: string;
  subtitle?: string;
  description?: string;
  startDate: string;
  endDate?: string | null;
  ongoing?: boolean;
  location?: string;
  image?: string;
  url?: string;
  rawData?: any;
}

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.page.html',
  styleUrls: ['./timeline.page.scss'],
  standalone: true,
  imports: [CommonModule, IonContent]
})

export class TimelinePage implements OnInit {

  data: any = null;
  timeline: TimelineEntry[] = [];

  constructor(private profileService: ProfileService) {}

  ngOnInit() {
    this.profileService.getProfile().subscribe({
      next: (profileData) => {
        this.data = profileData;
        this.timeline = this.buildTimeline(profileData);
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  buildTimeline(data: any): TimelineEntry[] {

    let timeline: TimelineEntry[] = [];

    /*
      EDUCATION + RESEARCH
    */

    if (data.educationResearch) {
      timeline.push(
        ...data.educationResearch.map((item: any) => ({
          type: item.type,
          title: item.qualification,
          subtitle: item.institution,
          description: item.description?.primary?.join(' ') || '',
          startDate: item.startDate?.trim(),
          endDate: item.endDate,
          location: item.location,
          rawData: item
        }))
      );
    }

    /*
      TEACHING
    */

    if (data.teaching) {
      timeline.push(
        ...data.teaching.map((item: any) => ({
          type: 'teaching',
          title: item.course,
          subtitle: item.institution,
          startDate: item.startDate,
          endDate: item.endDate,
          location: item.location,
          rawData: item
        }))
      );
    }

    /*
      OTHER WORK EXPERIENCE
    */

    if (data.otherWorkExperience) {
      timeline.push(
        ...data.otherWorkExperience.map((item: any) => ({
          type: 'work',
          title: item.role,
          subtitle: item.organization,
          description: item.description?.join(' ') || '',
          startDate: item.startDate,
          endDate: item.endDate,
          ongoing: item.ongoing,
          location: item.location,
          rawData: item
        }))
      );
    }

    /*
      PUBLICATIONS
    */

    if (data.publication) {
      timeline.push(
        ...data.publication.map((item: any) => ({
          type: 'publication',
          title: item.title,
          subtitle: item.type,
          description: item.abstract || '',
          startDate: `${item.year}-${String(item.month).padStart(2, '0')}-01`,
          url: item.url,
          rawData: item
        }))
      );
    }

    /*
      EXHIBITIONS
    */

    if (data.exhibition) {
      timeline.push(
        ...data.exhibition.map((item: any) => ({
          type: 'exhibition',
          title: item.title,
          subtitle: item.type,
          description: item.description?.primary || '',
          startDate: item.startDate,
          endDate: item.endDate,
          ongoing: item.ongoing,
          image: item.images?.[0]?.path,
          rawData: item
        }))
      );
    }

    /*
      CREATIVE WORKS
    */

    if (data.creativeWork) {
      timeline.push(
        ...data.creativeWork.map((item: any) => ({
          type: 'creativeWork',
          title: item.title,
          subtitle: item.type,
          description: item.descritpion,
          startDate: `${item.year}-01-01`,
          image: item.image,
          rawData: item
        }))
      );
    }

    /*
      ARCHIVE
    */

    if (data.archive) {
      timeline.push(
        ...data.archive.map((item: any) => ({
          type: 'repository',
          title: item.title,
          subtitle: 'Repository',
          description: item.description,
          startDate: item.startDate,
          url: item.url,
          rawData: item
        }))
      );
    }

    /*
      SORT DESCENDING
    */

    return timeline.sort((a, b) => {
      return new Date(b.startDate).getTime() - new Date(a.startDate).getTime();
    });
  }

  formatDate(date: string): string {
    return new Date(date).getFullYear().toString();
  }
}