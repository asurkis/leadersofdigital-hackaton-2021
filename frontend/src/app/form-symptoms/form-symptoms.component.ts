import { Component, OnInit } from '@angular/core';
import { SharedInfoService } from '../shared-info.service';

@Component({
  selector: 'app-form-symptoms',
  templateUrl: './form-symptoms.component.html',
  styleUrls: ['./form-symptoms.component.css']
})
export class FormSymptomsComponent implements OnInit {
  constructor(public sharedInfo: SharedInfoService) { }
  ngOnInit(): void { }
}
