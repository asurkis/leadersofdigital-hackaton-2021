import { Component, OnInit } from '@angular/core';
import { SharedInfoService } from '../shared-info.service';

@Component({
  selector: 'app-form-chronic-info',
  templateUrl: './form-chronic-info.component.html',
  styleUrls: ['./form-chronic-info.component.css']
})
export class FormChronicInfoComponent implements OnInit {
  constructor(public sharedInfo: SharedInfoService) { }
  ngOnInit(): void { }
}
