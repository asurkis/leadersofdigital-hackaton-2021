import { Component, OnInit } from '@angular/core';
import { SharedInfoService } from '../shared-info.service';

@Component({
  selector: 'app-form-general-info',
  templateUrl: './form-general-info.component.html',
  styleUrls: ['./form-general-info.component.css']
})
export class FormGeneralInfoComponent implements OnInit {
  constructor(public sharedInfo: SharedInfoService) { }
  ngOnInit(): void { }
}
