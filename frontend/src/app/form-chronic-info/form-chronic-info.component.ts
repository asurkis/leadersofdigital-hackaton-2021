import { Component, OnInit } from '@angular/core';
import { ChronicRecord, SharedInfoService } from '../shared-info.service';

@Component({
  selector: 'app-form-chronic-info',
  templateUrl: './form-chronic-info.component.html',
  styleUrls: ['./form-chronic-info.component.css']
})
export class FormChronicInfoComponent implements OnInit {
  constructor(public sharedInfo: SharedInfoService) { }
  ngOnInit(): void { }

  newRecordText = '';

  get chronicRecords(): ChronicRecord[] {
    return this.sharedInfo.staticInfo.chronicRecords;
  }

  addItem(): void {
    this.chronicRecords.push({
      text: this.newRecordText,
      date: new Date().toISOString()
    });
    this.chronicRecords.sort((a, b) => +new Date(b.date) - +new Date(a.date));
    this.newRecordText = '';
  }

  removeItem(record: ChronicRecord): void {
    this.chronicRecords.splice(this.chronicRecords.indexOf(record), 1);
  }
}
