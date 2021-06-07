import { Icu } from '@angular/compiler/src/i18n/i18n_ast';
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
  filtered;

  search(searchWord) {
    let keyword = searchWord.target.value.toLowerCase();
    this.filtered = this.hpCharacters.filter(character => {
      return character.name.toLowerCase().includes(keyword) || character.house.toLowerCase().includes(keyword);
  })
  }

  constructor(private services: HpService) { }

  ngOnInit() {
    this.fetchCharacters();
  }
  fetchCharacters() {
    this.services.fetchHpCharacters().subscribe(response => {
      this.hpCharacters = response;
      this.filtered = this.hpCharacters;
    })
  }


}
