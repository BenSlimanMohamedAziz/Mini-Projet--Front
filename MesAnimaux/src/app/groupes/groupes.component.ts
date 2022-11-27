import { Component, OnInit } from '@angular/core';
import { Groupe } from '../model/groupe.model';
import { GroupeService } from '../services/groupe.service';

@Component({
  selector: 'app-groupes',
  templateUrl: './groupes.component.html',
  styleUrls: ['./groupes.component.css']
})

export class GroupesComponent implements OnInit {

  groupes!: Groupe[];
  totalLength:any;
   page:number=1;
   count:number=0;

  constructor(private grpService: GroupeService) {

  }

  ngOnInit(): void {
      this.chargerGrp();
  }
  chargerGrp(){
    this.grpService.listeGroupe().subscribe(grps => {
      this.totalLength=grps.length;
    this.groupes = grps;
    console.log(grps);
    });
    }

  supprimerGroup(g: Groupe)
  {
  let conf = confirm("Etes-vous sûr ?");
  if (conf)
  this.grpService.supprimerGrp(g.idGrp).subscribe(() => {
  console.log("Groupe supprimé");
  this.chargerGrp();
  });
  }
}
