import { Component, OnInit } from '@angular/core';
import { SharedInfoService } from '../shared-info.service';

@Component({
  selector: 'app-display-summary',
  templateUrl: './display-summary.component.html',
  styleUrls: ['./display-summary.component.css']
})
export class DisplaySummaryComponent implements OnInit {
  constructor(public sharedInfo: SharedInfoService) { }
  ngOnInit(): void { }
}
