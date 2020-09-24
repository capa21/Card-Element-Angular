import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Character } from 'src/app/model/character.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class CardComponent implements OnInit
{
  @Input() character: Character;
  constructor(){}
  ngOnInit(): void {}

}
