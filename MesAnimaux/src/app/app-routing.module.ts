import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimalsComponent } from './animals/animals.component';
import { AddAnimalComponent } from './add-animal/add-animal.component';
import { UpdateAnimalComponent } from './update-animal/update-animal.component';
import { GroupesComponent } from './groupes/groupes.component';
import { AddGrpComponent } from './add-grp/add-grp.component';
import { UpdateGroupeComponent } from './update-groupe/update-groupe.component';
import { RechercheParGroupeComponent } from './recherche-par-groupe/recherche-par-groupe.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { AnimalGuard } from './animal.guard';



const routes: Routes = [
  {path: "animals", component : AnimalsComponent},
  {path : "add-animal", component : AddAnimalComponent, canActivate:[AnimalGuard]},
  //{path: "add-animal", component : AddAnimalComponent},
  { path: "", redirectTo: "animals", pathMatch: "full" },
  {path: "updateAnimal/:id", component: UpdateAnimalComponent},
  {path: "groupes", component : GroupesComponent},
  {path: "add-grp", component : AddGrpComponent},
  {path: "updateGrp/:id", component : UpdateGroupeComponent},
  {path: "rechercheParGroupe", component : RechercheParGroupeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'app-forbidden', component: ForbiddenComponent}
  ];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
