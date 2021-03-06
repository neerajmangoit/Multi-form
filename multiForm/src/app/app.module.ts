import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FormsComponent } from './forms/forms.component';
import { MatStepperModule } from '@angular/material/stepper';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { DataShowComponent } from './data-show/data-show.component';
import { EditFormComponent } from './edit-form/edit-form.component';
import { Routes, RouterModule } from '@angular/router';
import { TemplateEditComponent } from './template-edit/template-edit.component';
import { TypeCheckPipe } from './type-check.pipe';
import { ShowDataReactComponent } from './show-data-react/show-data-react.component';
import { HttpClientModule } from '@angular/common/http';

import {MatFormFieldModule} from '@angular/material/form-field';


const appRoutes:Routes = [
  { path:'edit', component: TemplateEditComponent },
  { path:'show', component: DataShowComponent },
  { path:'showReactive', component: ShowDataReactComponent },
]


@NgModule({
  declarations: [
    AppComponent,
    FormsComponent,
    HeaderComponent,
    ReactiveFormComponent,
    DataShowComponent,
    EditFormComponent,
    TemplateEditComponent,
    TypeCheckPipe,
    ShowDataReactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgMultiSelectDropDownModule.forRoot(),
    BrowserAnimationsModule,
    MatStepperModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
