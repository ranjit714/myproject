import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { DirectivesComponent } from './directives/directives.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { VishalComponent } from './vishal/vishal.component';
import { PipesComponent } from './pipes/pipes.component';
import { SquarePipe } from './shared/customPipe/square.pipe';
import { CheckgenderPipe } from './shared/custompipe/checkgender.pipe';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { NavComponent } from './nav/nav.component';
import { AngularformsComponent } from './angularforms/angularforms.component';
import { FooterComponent } from './footer/footer.component';
import { UtdfComponent } from './utdf/utdf.component';
import { RtfComponent } from './rtf/rtf.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ServiceDataComponent } from './service-data/service-data.component'; 
import { HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    DatabindingComponent,
    DirectivesComponent,
    VishalComponent,
    PipesComponent,
    SquarePipe,
    CheckgenderPipe,
    ParentComponent,
    ChildComponent,
    NavComponent,
    AngularformsComponent,
    FooterComponent,
    UtdfComponent,
    RtfComponent,
    PageNotFoundComponent,
    ServiceDataComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
