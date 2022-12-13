import { Injectable } from '@angular/core';
import { Animal } from '../model/animal.model';
import { Groupe } from '../model/groupe.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { apiURL } from '../config';
import { GroupeWrapper } from '../model/groupeWrapped.model';
import { AuthService } from "./auth.service";
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class AnimalService {
  apiUrlGrp: string = 'http://localhost:8081/animals/grp';

  animal!: Animal;
  constructor(private http: HttpClient, private authService: AuthService) {
    console.log("Creation du service animal");
  }

  listeAnimal(): Observable<Animal[]> {
   /*let jwt = this.authService.getToken();
    jwt = "Bearer " + jwt;
    let httpHeaders = new HttpHeaders({ "Authorization": jwt })*/
    return this.http.get<Animal[]>(apiURL + "/all");
  }


  /*  listeGroupes(): Observable<GroupeWrapper> {
      return this.http.get<GroupeWrapper>(this.apiUrlGrp);
    }*/
  listeGroupes(): Observable<GroupeWrapper> {
    /*let jwt = this.authService.getToken();
    jwt = "Bearer " + jwt;
    let httpHeaders = new HttpHeaders({ "Authorization": jwt })*/
    return this.http.get<GroupeWrapper>(this.apiUrlGrp);
  }

  ajouterAnimal(anims: Animal): Observable<Animal> {
   /* let jwt = this.authService.getToken();
    jwt = "Bearer " + jwt;
    let httpHeaders = new HttpHeaders({ "Authorization": jwt })*/
   return this.http.post<Animal>(apiURL, anims);
    //return this.http.post<Animal>(apiURL, anims);
    //return this.http.post<Animal>(apiURL, anims, httpOptions);
  }

  supprimerAnimal(id: number) {
   const url = `${apiURL}/${id}`;
    /*let jwt = this.authService.getToken();
    jwt = "Bearer " + jwt;
    let httpHeaders = new HttpHeaders({ "Authorization": jwt })*/
    return this.http.delete(url);
  }
  consulterAnimal(id: number): Observable<Animal> {
    const url = `${apiURL}/${id}`;
 /* let jwt = this.authService.getToken();
    jwt = "Bearer " + jwt;
    let httpHeaders = new HttpHeaders({ "Authorization": jwt })*/
    return this.http.get<Animal>(url);
  }
  updateAnimal(anims: Animal): Observable<Animal> {
    /*let jwt = this.authService.getToken();
    jwt = "Bearer " + jwt;
    let httpHeaders = new HttpHeaders({ "Authorization": jwt })*/
    return this.http.put<Animal>(apiURL, anims);
  }

  rechercherParGroupe(idGrp: number): Observable<Animal[]> {
    /*let jwt = this.authService.getToken();
    jwt = "Bearer " + jwt;
    let httpHeaders = new HttpHeaders({ "Authorization": jwt })*/
    const url = `${apiURL}/animalsgrp/${idGrp}`;
    return this.http.get<Animal[]>(url);
  }
  rechercherParNom(nom: string): Observable<Animal[]> {
   /* let jwt = this.authService.getToken();
    jwt = "Bearer " + jwt;
    let httpHeaders = new HttpHeaders({ "Authorization": jwt })*/
    const url = `${apiURL}/animalsByName/${nom}`;
    return this.http.get<Animal[]>(url);
  }

}
