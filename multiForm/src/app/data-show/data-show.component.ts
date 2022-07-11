import { Component, OnInit } from '@angular/core';
import { FormDataService } from '../form-data.service';

@Component({
  selector: 'app-data-show',
  templateUrl: './data-show.component.html',
  styleUrls: ['./data-show.component.css'],
})
export class DataShowComponent implements OnInit {
  constructor(private _formDataService: FormDataService,
    private userInfo: FormDataService) {}
  
  servisceData = [];

  ngOnInit(): void {
    this.servisceData = this.userInfo.userData;
  }

  onEdit(id) {
    console.log(id);
    this.userInfo.dataId = id;
  }



}
