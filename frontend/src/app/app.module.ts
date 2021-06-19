import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DisplaySummaryComponent } from './display-summary/display-summary.component';
import { FormGeneralInfoComponent } from './form-general-info/form-general-info.component';
import { FormChronicInfoComponent } from './form-chronic-info/form-chronic-info.component';
import { FormSymptomsComponent } from './form-symptoms/form-symptoms.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { NavigationListComponent } from './navigation-list/navigation-list.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplaySummaryComponent,
    FormGeneralInfoComponent,
    FormChronicInfoComponent,
    FormSymptomsComponent,
    NavigationListComponent
  ],
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
