import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormsModule, FormGroup, FormControl } from '@angular/forms';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { FormDataService } from '../form-data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { formatCurrency } from '@angular/common';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css'],
})
export class FormsComponent implements OnInit {
  constructor(
    private _formDataService: FormDataService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  
  @ViewChild('form') form:NgForm;


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


  ngOnInit(): void {
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
    this._formDataService.getData(form.value);
    this.router.navigate(['/show'], { relativeTo: this.route });
    console.log(form.value.firstForm.name);
    
  }

  onSelected() {}
}
