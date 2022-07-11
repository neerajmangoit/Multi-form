import { Component, OnInit } from '@angular/core';
import { FormDataService } from '../form-data.service';

@Component({
  selector: 'app-show-data-react',
  templateUrl: './show-data-react.component.html',
  styleUrls: ['./show-data-react.component.css']
})
export class ShowDataReactComponent implements OnInit {

  constructor(private _formDataService: FormDataService,
    private userInfo: FormDataService) {}
  
  servisceData = [];

  ngOnInit(): void {
    this.servisceData = this.userInfo.userData;
  }

  onEdit(id) {
    this.userInfo.dataId = id;
  }

  onCheck(value) {
    const s = this._formDataService.userData['data'].thirdForm.contactPerson
    for (const value of s) {
      if(typeof value == 'number'){
        return true;
       }
    }
    
    // typeof(this._formDataService['data'].thirdForm.contactPerson)

  }

}
