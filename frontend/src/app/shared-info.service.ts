import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedInfoService {

  public staticInfo = {
    fullName: '',
    birthday: '',
    sex: '',
    passport_series: '',
    passport_number: '',
    address: '',
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
