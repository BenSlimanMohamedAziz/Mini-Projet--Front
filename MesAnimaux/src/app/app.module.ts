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
    SearchFilterPipe
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
