import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularformsComponent } from './angularforms/angularforms.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { DirectivesComponent } from './directives/directives.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ParentComponent } from './parent/parent.component';
import { PipesComponent } from './pipes/pipes.component';
import { RtfComponent } from './rtf/rtf.component';
import { ServiceDataComponent } from './service-data/service-data.component';
import { AuthGuard } from './shared/Authentication/auth.guard';
import { UtdfComponent } from './utdf/utdf.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'login',component:LoginComponent},
 // {path:'databinding',component:DatabindingComponent},
  {path:'directive',component:DirectivesComponent},
  {path:'parent',component:ParentComponent},
  {path:'pipes',component:PipesComponent,canActivate:[AuthGuard]},
  {path:'servdata',component:ServiceDataComponent},
  {path:'crud',loadChildren:()=>import('./crud/crud.module').then((m)=>m.CrudModule)},
  {path:'angularform',component:AngularformsComponent , children:[
    {path:'utdf',component:UtdfComponent},
    {path:'rtf',component:RtfComponent}
  ]},
  {path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
