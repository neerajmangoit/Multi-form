import {
  Component,
  OnInit,
  ElementRef,
  Output,
  EventEmitter,
} from '@angular/core';
import { FormArray, FormControl, FormBuilder, NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormDataService } from '../form-data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css'],
})
export class ReactiveFormComponent implements OnInit {
  constructor(
    private _formDataService: FormDataService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  myform: FormGroup;

  genders = ['male', 'female'];

  ngOnInit(): void {
    this.myform = new FormGroup({
      firstForm: new FormGroup({
        name: new FormControl(null, [
          Validators.required,
          Validators.pattern('^[ a-zA-Z][a-zA-Z ]*$'),
        ]),
        email: new FormControl(null, [Validators.required, Validators.email]),
        gender: new FormControl(null),
        dob: new FormControl(null, [Validators.required]),
      }),
      secondForm: new FormGroup({
        profile: new FormControl(null, [Validators.required]),
        hobbies: new FormArray([]),
        phone: new FormControl(null, [Validators.required]),
      }),
      thirdForm: new FormGroup({
        qualification: new FormControl(null),
        profession: new FormControl(null),
        description: new FormControl(null, [Validators.required]),
        contactPerson: new FormArray([
          new FormControl()
        ]),
      }),
    });

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

  hobbySelect(event) {
    const selectedHobby = this.myform.get('secondForm.hobbies') as FormArray;
    if (event.target.checked) {
      selectedHobby.push(new FormControl(event.target.value));
    } else {
    }
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

  onSubmit() {
    this._formDataService.getData(this.myform.value);
    console.log(this.myform.value);
    this.router.navigate(['/showReactive'], { relativeTo: this.route });
  }

  onSelected() {
    console.log(this.persons);
  }
}
