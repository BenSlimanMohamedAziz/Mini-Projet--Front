import { Injectable } from '@angular/core';
import { Groupe } from '../model/groupe.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class GroupeService {
  apiUrlGrp: string = 'http://localhost:8081/animals/api/grp';

  groupe!: Groupe;
  constructor(private http: HttpClient) {
    console.log("Creation du service Groupe");
  }

  listeGroupe(): Observable<Groupe[]> {
    return this.http.get<Groupe[]>(this.apiUrlGrp);
  }


  ajouterGrp(grp: Groupe): Observable<Groupe> {
    return this.http.post<Groupe>(this.apiUrlGrp, grp, httpOptions);
  }

  consulterGrp(id: number): Observable<Groupe> {
    const url = `${this.apiUrlGrp}/${id}`;
    return this.http.get<Groupe>(url);
  }

  supprimerGrp(id: number) {
    const url = `${this.apiUrlGrp}/${id}`;
    return this.http.delete(url, httpOptions);
  }

  updateGrp(grp: Groupe): Observable<Groupe> {
    return this.http.put<Groupe>(this.apiUrlGrp, grp, httpOptions);
  }
}

