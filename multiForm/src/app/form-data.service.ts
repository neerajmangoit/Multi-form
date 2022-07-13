import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FormDataService {
  constructor(private http: HttpClient) {}

  dataId;

  userData = [];

  idval = 1;

  getData(user: object) {
    this.userData.push({ id: this.idval++, form: 'reactive', data: user });
    console.log(this.userData);
    this.http
      .post(
        'https://shining-haiku-351209-default-rtdb.firebaseio.com/users.json',
        this.userData
      )
      .subscribe((responseData) => {
        console.log(responseData);
      });
  }

  updateData(newUserData) {
    this.userData[this.dataId - 1].data = newUserData;
    console.log(this.userData);
    this.http
      .put(
        'https://shining-haiku-351209-default-rtdb.firebaseio.com/users.json',
        this.userData
      )
      .subscribe((responseData) => {
        console.log(responseData);
      });
  }

}
