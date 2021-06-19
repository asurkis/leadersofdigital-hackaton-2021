import { Component, OnInit } from '@angular/core';
import { SymptomsService } from '../symptoms.service';

@Component({
  selector: 'app-form-symptoms',
  templateUrl: './form-symptoms.component.html',
  styleUrls: ['./form-symptoms.component.css']
})
export class FormSymptomsComponent implements OnInit {

  constructor(public service: SymptomsService) { }

  ngOnInit(): void {
  }

}
