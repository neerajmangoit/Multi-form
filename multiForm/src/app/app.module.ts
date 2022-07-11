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

const appRoutes:Routes = [
  { path:'edit', component: EditFormComponent },
  { path:'show', component: DataShowComponent },

]


@NgModule({
  declarations: [
    AppComponent,
    FormsComponent,
    HeaderComponent,
    ReactiveFormComponent,
    DataShowComponent,
    EditFormComponent,
    TemplateEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgMultiSelectDropDownModule.forRoot(),
    BrowserAnimationsModule,
    MatStepperModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
