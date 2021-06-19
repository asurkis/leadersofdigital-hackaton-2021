import { Injectable } from '@angular/core';

export interface ChronicRecord {
  text: string;
  date: string;
}

export interface StaticInfoInterface {
  fullName: string;
  passport: string;
  policy: string;
  snils: string;
  chronicRecords: ChronicRecord[];
}

@Injectable({
  providedIn: 'root'
})
export class SharedInfoService {

  public staticInfo: StaticInfoInterface = {
    fullName: '',
    birthday: '',
    sex: '',
    passport_series: '',
    passport_number: '',
    address: '',
    policy: '',
    snils: '',

    chronicRecords: []
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
