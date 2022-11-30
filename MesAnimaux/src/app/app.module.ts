import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnimalsComponent } from './animals/animals.component';
import { AddAnimalComponent } from './add-animal/add-animal.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { UpdateAnimalComponent } from './update-animal/update-animal.component';
import { GroupesComponent } from './groupes/groupes.component';
import { AddGrpComponent } from './add-grp/add-grp.component';
import { UpdateGroupeComponent } from './update-groupe/update-groupe.component';
import { HttpClientModule } from '@angular/common/http';
import { RechercheParGroupeComponent } from './recherche-par-groupe/recherche-par-groupe.component';
import { SearchFilterPipe } from './search-filter.pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import {HTTP_INTERCEPTORS } from '@angular/common/http';
//import { TokenInterceptor } from './services/token.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    AnimalsComponent,
    AddAnimalComponent,
    UpdateAnimalComponent,
    GroupesComponent,
    AddGrpComponent,
    UpdateGroupeComponent,
    RechercheParGroupeComponent,
    SearchFilterPipe,
    LoginComponent,
    ForbiddenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    NgxPaginationModule
  ],
  providers: [/*{ provide : HTTP_INTERCEPTORS,
    useClass : TokenInterceptor,
    multi : true}
  */],
  bootstrap: [AppComponent]
})
export class AppModule { }
