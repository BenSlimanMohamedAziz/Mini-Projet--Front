import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { AnimalService } from '../services/animal.service';
import { Animal } from '../model/animal.model';
import { Groupe } from '../model/groupe.model';

@Component({
  selector: 'app-update-animal',
  templateUrl: './update-Animal.component.html',
  styleUrls: ['./update-animal.component.css']
})
export class UpdateAnimalComponent implements OnInit {
  currentAnimal = new Animal();
   groupes! : Groupe[];
   updatedGrpId! : number;

  constructor(private activatedRoute: ActivatedRoute,
    private router :Router,
    private animalService: AnimalService) { }
  ngOnInit() {
   this.animalService.listeGroupes().
   subscribe(grps => {console.log(grps);
   this.groupes = grps._embedded.groupes;
   }
   );
   this.animalService.consulterAnimal(this.activatedRoute.snapshot.params['id']).
   subscribe(anim =>{ this.currentAnimal = anim;
   this.updatedGrpId = this.currentAnimal.groupe.idGrp;
   } ) ;

  }

  updateAnimal() {
    this.currentAnimal.groupe = this.groupes.find(grp => grp.idGrp == this.updatedGrpId)!;
   this.animalService.updateAnimal(this.currentAnimal).subscribe(anim => {
   this.router.navigate(['animals']); }
   );
    }

}

