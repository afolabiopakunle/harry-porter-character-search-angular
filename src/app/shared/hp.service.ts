import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICharacter } from './character.model';

@Injectable({
  providedIn: 'root'
})
export class HpService {

  constructor(private http: HttpClient) { }

  fetchHpCharacters(): Observable<ICharacter[]> {
    return this.http.get<ICharacter[]>('https://hp-api.herokuapp.com/api/characters')
  }
}
