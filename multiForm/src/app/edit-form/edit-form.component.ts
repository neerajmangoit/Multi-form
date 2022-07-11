import { Component, OnInit, ElementRef, Input } from '@angular/core';
import { FormArray, FormControl, FormBuilder, NgForm } from '@angular/forms';
import { FormsModule }   from '@angular/forms';
import { IDropdownSettings, } from 'ng-multiselect-dropdown';
import { FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormDataService } from '../form-data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.css']
})
export class EditFormComponent implements OnInit {

  

  constructor(private _formDataService: FormDataService,
    private router: Router, private route: ActivatedRoute
    ) {
    }

  myform: FormGroup;

  servisceData = [];
  userInfoData=[];
  formId;

  
  genders = ['male', 'female'];
    
  ngOnInit(): void {

    this.servisceData = this._formDataService.userData;
    
    this.formId = this._formDataService.dataId;

    this.userInfoData = this._formDataService.userData.find(x => x.id === this.formId);

    
    console.log(this.userInfoData['data'].firstForm.name);



    this.myform = new FormGroup({
      "firstForm": new FormGroup({
        'name': new FormControl(this.userInfoData['data'].firstForm.name, [Validators.required, Validators.pattern('^[ a-zA-Z][a-zA-Z ]*$')]),
        'email': new FormControl(this.userInfoData['data'].firstForm.email, [Validators.required, Validators.email] ),
        'gender': new FormControl(this.userInfoData['data'].firstForm.gender),
        'dob': new FormControl(this.userInfoData['data'].firstForm.dob, [Validators.required])
      }),
      "secondForm": new FormGroup({
        'profile': new FormControl(null, [Validators.required ]),
        'hobbies': new FormArray([]),
        'phone': new FormControl(this.userInfoData['data'].secondForm.phone, [Validators.required])
      }),
      "thirdForm": new FormGroup({
        'qualification': new FormControl(this.userInfoData['data'].thirdForm.qualification),
        'profession': new FormControl(this.userInfoData['data'].thirdForm.profession),
        'description': new FormControl(this.userInfoData['data'].thirdForm.description, [Validators.required ]),
        'contactPerson': new FormControl()
      })
    });


    
  

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


  onSubmit() {
    this._formDataService.updateData(this.myform.value);
    // console.log(this._formDataService.userData);
    this.router.navigate(['/show'],{ relativeTo:this.route })  
  }


  onSelected() {
    console.log(this.persons);
  } 


}
