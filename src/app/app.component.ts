import { Component, OnInit } from '@angular/core';
import { Character } from './model/character.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public infoCharacter: Character = {
    created : new Date( '2017-11-04T18:48:46.250Z'),
    episode: [
      'https://rickandmortyapi.com/api/episode/1',
      'https://rickandmortyapi.com/api/episode/2'
    ],
    gender: 'Male',
    id: 1,
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
    location: {
      name: 'Earth (Replacement Dimension)',
      url: 'https://rickandmortyapi.com/api/location/20'
    },
    name: 'Rick Sanchez',
    origin: {
      name: 'Earth (C-137)',
      'url': 'https://rickandmortyapi.com/api/location/1'
    },
    species: 'Human',
    status: 'Alive',
    type: '',
    url: 'https://rickandmortyapi.com/api/character/1',
  };
  constructor() { }

  ngOnInit(): void {
    // const characterComponent = document.querySelector('app-card');
    // console.log(characterComponent);
    // characterComponent.setState(this.infoCharacter);
  }

}
