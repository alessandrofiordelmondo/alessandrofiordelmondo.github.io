import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ProfileService {
  private profileUrl = 'assets/data/2026profile.json';
  constructor(private http: HttpClient) {}
  
  getProfile(): Observable<any> {
    return this.http.get(this.profileUrl);
  }
  
}