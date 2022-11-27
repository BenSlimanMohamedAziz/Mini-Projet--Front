import { Component, OnInit } from '@angular/core';
import { Animal } from '../model/animal.model';
import { AnimalService } from '../services/animal.service';
import { Groupe } from '../model/groupe.model';
import { RouterModule, Router} from '@angular/router';

@Component({
  selector: 'app-add-animal',
  templateUrl: './add-animal.component.html',
  styleUrls: ['./add-animal.component.css']
})
export class AddAnimalComponent implements OnInit {

  newAnimal = new Animal();
  groupes!: Groupe[];

  newIdGrp!: number;
  newGroupe!: Groupe;

  message!: string;

  constructor(private animalService: AnimalService, private router: Router) { }

  ngOnInit() {
    this.animalService.listeGroupes().
    subscribe(grps => {console.log(grps);
    this.groupes = grps._embedded.groupes;
    }
    );
  }

  addAnimal(){
    this.newAnimal.groupe = this.groupes.find(grp => grp.idGrp == this.newIdGrp)!;
    this.animalService.ajouterAnimal(this.newAnimal).subscribe(prod => {
    console.log(prod);
    this.router.navigate(['animals']);
    });

    }


}
