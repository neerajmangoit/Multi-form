import { Component, OnInit, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormsModule, FormGroup }   from '@angular/forms';
import { IDropdownSettings, } from 'ng-multiselect-dropdown';
import { FormDataService } from '../form-data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-template-edit',
  templateUrl: './template-edit.component.html',
  styleUrls: ['./template-edit.component.css']
})
export class TemplateEditComponent implements OnInit {

  constructor(private _formDataService: FormDataService,
    private router: Router, private route: ActivatedRoute) { }
  
  servisceData = [];
  userInfoData=[];
  formId;

  dropdownList = [];
  dropdownSettings:IDropdownSettings={};

  hobbies = [
    {
      name: 'Video Games',
      selected: false
    },
    {
      name: 'Swimming',
      selected: false
    },
    {
      name: 'Travelling',
      selected: false
    },
    {
      name: 'Hiking',
      selected: false
    },
    {
      name: 'Sports',
      selected: false
    }
  ];

  ngOnInit(): void {
    this.servisceData = this._formDataService.userData;
    
    this.formId = this._formDataService.dataId;

    this.userInfoData = this._formDataService.userData.find(x => x.id === this.formId);


    this.dropdownList = [
      { item_id: 1, item_text: 'Phd' },
      { item_id: 2, item_text: 'Masters' },
      { item_id: 3, item_text: 'Bachelors' },
      { item_id: 4, item_text: 'Higher Secondary' },
      { item_id: 5, item_text: 'Schooling' }
    ];
    this.dropdownSettings = {
      idField: 'item_id',
      textField: 'item_text',
    };
  }

  public persons: any[] = [{
    id: '',
    name: '',
    phone: '',
  }];

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
    this._formDataService.getData(form.value);
    this.router.navigate(['/show'],{ relativeTo:this.route })     
  }

  
  onSelected() {
  }
}
