import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormGeneralInfoComponent } from './form-general-info/form-general-info.component';
import { DisplaySummaryComponent } from './display-summary/display-summary.component';
import { FormChronicInfoComponent } from './form-chronic-info/form-chronic-info.component';
import { FormSymptomsComponent } from './form-symptoms/form-symptoms.component';

const routes: Routes = [
  { path: 'general', component: FormGeneralInfoComponent },
  { path: 'chronic', component: FormChronicInfoComponent },
  { path: 'symptoms', component: FormSymptomsComponent },
  { path: 'summary', component: DisplaySummaryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
