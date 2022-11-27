import { Component, OnInit } from '@angular/core';
import { Animal } from '../model/animal.model';
import { Groupe } from '../model/groupe.model';
import { AnimalService } from '../services/animal.service';

@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.css']
})

export class AnimalsComponent implements OnInit {


  animals!: Animal[]; //un tableau Animals
  IdGroupe!: number;
  groupes!: Groupe[];
  nomAnimal!:string;
  allAnimals! : Animal[];
  searchTerm!: string;
  totalLength:any;
   page:number=1;
   count:number=0;

  constructor(private animalService: AnimalService) {
  }

  ngOnInit(): void {
        this.chargerAnimals();
        this.animalService.listeAnimal().subscribe(anims => {
          this.allAnimals = anims;
          this.totalLength=anims.length;
          console.log(anims);
          });

  }

    chargerAnimals(){
    this.animalService.listeAnimal().subscribe(anims => {
    console.log(anims);
    this.animals = anims;});
    }

    supprimerAnimals(a: Animal)
    {
    let conf = confirm("Etes-vous sûr ?");
    if (conf)
    this.animalService.supprimerAnimal(a.idAnimal).subscribe(() => {
    console.log("animal supprimé");
    this.chargerAnimals();
    });
    }

      /*rechercherAnims(){
        this.animalService.rechercherParNom(this.nomAnimal).
        subscribe(anims => {
        this.animals = anims;
        console.log(anims)});
        }
        */
        onKeyUp(filterText : string){
          this.animals = this.allAnimals.filter(item =>
          item.nomAnimal.toLowerCase().includes(filterText));
          }


}
