import { Component, OnInit } from '@angular/core';
import { ICharacter } from './shared/character.model';
import { HpService } from './shared/hp.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  hpCharacters: ICharacter[];
  searchTerm: string;

  
  constructor(private services: HpService) {}

  ngOnInit() {
    this.fetchCharacters();
  }
  fetchCharacters() {
    this.services.fetchHpCharacters().subscribe(response => {
      this.hpCharacters = response;
      console.log(this.hpCharacters);
    })
  }


}
