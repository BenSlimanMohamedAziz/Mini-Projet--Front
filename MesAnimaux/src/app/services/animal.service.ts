import { Injectable } from '@angular/core';
import { Animal } from '../model/animal.model';
import { Groupe } from '../model/groupe.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { apiURL } from '../config';
import { GroupeWrapper } from '../model/groupeWrapped.model';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class AnimalService {
  apiUrlGrp: string = 'http://localhost:8081/animals/grp';

  animal!: Animal;
  constructor(private http: HttpClient) {
    console.log("Creation du service animal");
  }

  listeAnimal(): Observable<Animal[]> {
    return this.http.get<Animal[]>(apiURL);
  }


  listeGroupes(): Observable<GroupeWrapper> {
    return this.http.get<GroupeWrapper>(this.apiUrlGrp);
  }

  ajouterAnimal(prod: Animal): Observable<Animal> {
    return this.http.post<Animal>(apiURL, prod, httpOptions);
  }

  supprimerAnimal(id: number) {
    const url = `${apiURL}/${id}`;
    return this.http.delete(url, httpOptions);
  }

  consulterAnimal(id: number): Observable<Animal> {
    const url = `${apiURL}/${id}`;
    return this.http.get<Animal>(url);
  }

  updateAnimal(anim: Animal): Observable<Animal> {
    return this.http.put<Animal>(apiURL, anim, httpOptions);
  }

  rechercherParGroupe(idGrp: number):Observable< Animal[]> {
    const url = `${apiURL}/animalsgrp/${idGrp}`;
    return this.http.get<Animal[]>(url);
    }
    rechercherParNom(nom: string):Observable< Animal[]> {
      const url = `${apiURL}/animalsByName/${nom}`;
      return this.http.get<Animal[]>(url);
      }

}
