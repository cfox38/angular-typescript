import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import {UserService} from './services/user.service';

import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { SummaryComponent } from './summary/summary.component';
import { ProfessionalExperienceComponent } from './professional-experience/professional-experience.component';
import { InternshipsOtherExperiencesComponent } from './internships-other-experiences/internships-other-experiences.component';
import { EducationComponent } from './education/education.component';
import { MenuComponent } from './menu/menu.component';
import { MenuItemComponent } from './menu-item/menu-item.component';


@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    SummaryComponent,
    ProfessionalExperienceComponent,
    InternshipsOtherExperiencesComponent,
    EducationComponent,
    MenuComponent,
    MenuItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [
  UserService
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
