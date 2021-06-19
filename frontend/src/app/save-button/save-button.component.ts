import { Component, OnInit } from '@angular/core';
import { SharedInfoService } from '../shared-info.service';

@Component({
  selector: 'app-save-button',
  templateUrl: './save-button.component.html',
  styleUrls: ['./save-button.component.css']
})
export class SaveButtonComponent implements OnInit {
  constructor(private sharedInfo: SharedInfoService) { }
  ngOnInit(): void {  }

  saveInfo(): void {
    localStorage.setItem('staticInfo', JSON.stringify(this.sharedInfo.staticInfo));
  }
}
