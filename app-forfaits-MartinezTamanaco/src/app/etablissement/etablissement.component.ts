import { Component, Input, OnInit } from '@angular/core';
import { Forfait } from '../forfait';

@Component({
  selector: 'app-etablissement',
  templateUrl: './etablissement.component.html',
  styleUrls: ['./etablissement.component.css']
})
export class EtablissementComponent implements OnInit {
  @Input() forfait?: Forfait;
  @Input() nom_etablissement?= '';
  


  constructor() { }

  ngOnInit(): void {
  }

}
