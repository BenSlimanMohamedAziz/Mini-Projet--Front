import { Component, OnInit } from '@angular/core';
import { Animal } from '../model/animal.model';
import { Groupe } from '../model/groupe.model';
import { AnimalService } from '../services/animal.service';
@Component({
  selector: 'app-recherche-par-groupe',
  templateUrl: './recherche-par-groupe.component.html',
  styles: [
  ]
})
export class RechercheParGroupeComponent implements OnInit {
  animals! : Animal[];
  IdGrp! : number;
  groupes! : Groupe[];

  constructor(private animalService:AnimalService ) { }

  ngOnInit(): void {
    this.animalService.listeGroupes().
    subscribe(grps => {this.groupes = grps._embedded.groupes;
    console.log(grps);
    }
    );
}
onChange() {
  this.animalService.rechercherParGroupe(this.IdGrp).
  subscribe(anims =>{this.animals=anims});
  }
}
