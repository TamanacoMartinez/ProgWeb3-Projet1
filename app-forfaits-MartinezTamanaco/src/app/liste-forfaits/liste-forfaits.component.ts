import { Component, Input,  OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Forfait } from '../forfait';
import { FORFAITS } from '../mock-forfaits';

@Component({
  selector: 'app-liste-forfaits',
  templateUrl: './liste-forfaits.component.html',
  styleUrls: ['./liste-forfaits.component.css']
})
export class ListeForfaitsComponent implements OnInit {
  @Input() premium? = true;
  
  forfaits = FORFAITS

  constructor() { }

  ngOnInit(): void {
  }

}
