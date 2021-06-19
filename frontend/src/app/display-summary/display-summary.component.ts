import { Component, OnInit } from '@angular/core';
import { GeneralInfoService } from '../general-info.service';
import { SymptomsService } from '../symptoms.service';

@Component({
  selector: 'app-display-summary',
  templateUrl: './display-summary.component.html',
  styleUrls: ['./display-summary.component.css']
})
export class DisplaySummaryComponent implements OnInit {

  constructor(
    public generalInfo: GeneralInfoService,
    public symptoms: SymptomsService
  ) { }

  ngOnInit(): void {
  }

}
