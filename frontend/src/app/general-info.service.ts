import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeneralInfoService {
  public fullName: string = '';
  public passport: string = '';
  public policy: string = '';
  public snils: string = '';

  constructor() { }
}
