import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedInfoService {

  public staticInfo = {
    fullName: '',
    passport: '',
    policy: '',
    snils: ''
  };

  public dynamicInfo = {
    symptoms: ''
  };

  constructor() {
    const saved = localStorage.getItem('staticInfo');
    if (saved) {
      this.staticInfo = JSON.parse(saved);
    }
  }
}
