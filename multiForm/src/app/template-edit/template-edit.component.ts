import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormsModule, FormGroup } from '@angular/forms';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { FormDataService } from '../form-data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-template-edit',
  templateUrl: './template-edit.component.html',
  styleUrls: ['./template-edit.component.css'],
})
export class TemplateEditComponent implements OnInit {
  constructor(
    private _formDataService: FormDataService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  @ViewChild('form') form: NgForm;

  servisceData;
  userInfoData = [];
  formId;

  genders = ['male', 'female'];
  dropdownList = [];
  dropdownSettings: IDropdownSettings = {};

  hobbies = [
    {
      name: 'Video Games',
      selected: false,
    },
    {
      name: 'Swimming',
      selected: false,
    },
    {
      name: 'Travelling',
      selected: false,
    },
    {
      name: 'Hiking',
      selected: false,
    },
    {
      name: 'Sports',
      selected: false,
    },
  ];

  hobbySelect() {
    const selectedHobby = [];
    for (let hobby of this.hobbies) {
      if (this.form.value.secondForm.hobbySelector[hobby.name]) {
        selectedHobby.push(hobby.name);
      }
    }
    return selectedHobby;
  }
  oldGender;

  // this.userInfoData['data'].firstForm.gender

  ngOnInit(): void {
    this.servisceData = this._formDataService.userData;

    this.formId = this._formDataService.dataId;

    this.userInfoData = this._formDataService.userData.find(
      (x) => x.id === this.formId
    );

    console.log(this.userInfoData['data'].firstForm.gender);
    this.dropdownList = [
      { item_id: 1, item_text: 'Phd' },
      { item_id: 2, item_text: 'Masters' },
      { item_id: 3, item_text: 'Bachelors' },
      { item_id: 4, item_text: 'Higher Secondary' },
      { item_id: 5, item_text: 'Schooling' },
    ];
    this.dropdownSettings = {
      idField: 'item_id',
      textField: 'item_text',
    };

    let pLength = Object.keys(
      this.userInfoData['data'].thirdForm.contactPerson
    ).length;
    for (let index = 0; index < pLength / 2 - 1; index++) {
      this.addPerson();
    }

    for (const person of this.persons) {
      let i = 0;
      person.name =
        this.userInfoData['data'].thirdForm.contactPerson['name' + i];
      person.phone =
        this.userInfoData['data'].thirdForm.contactPerson['phone' + i];
      i++;
    }

    this.oldGender = this.userInfoData['data'].firstForm.gender;
  }

  public persons: any[] = [
    {
      id: '',
      name: '',
      phone: '',
    },
  ];

  addPerson() {
    this.persons.push({
      id: this.persons.length + 1,
      name: '',
      phone: '',
    });
  }

  removePerson(i: number) {
    this.persons.splice(i, 1);
  }

  onSubmit(form: NgForm) {
    this._formDataService.updateData(form.value);
    this.router.navigate(['/show'], { relativeTo: this.route });
  }

  onSelected() {}
}
