import { Component, OnInit } from '@angular/core';
import { GeneralInfoService } from '../general-info.service';

@Component({
  selector: 'app-form-general-info',
  templateUrl: './form-general-info.component.html',
  styleUrls: ['./form-general-info.component.css']
})
export class FormGeneralInfoComponent implements OnInit {

  constructor(public service: GeneralInfoService) { }

  ngOnInit(): void {
  }

}
