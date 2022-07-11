import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class FormDataService {

  constructor() { }

  dataId;

  userData = [ 
  ]
  
  idval =1;

  getData(user: object) {
    this.userData.push(
  { id: this.idval++, form: 'reactive', data: user }
  );
    console.log(this.userData);
  }


  updateData(newUserData) {
    this.userData[this.dataId -1].data = newUserData;
    console.log(this.userData);
  }
  
}
