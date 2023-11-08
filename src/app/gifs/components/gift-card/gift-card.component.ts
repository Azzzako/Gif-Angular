import { Component, Input, OnInit } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'app-gift-card',
  templateUrl: './gift-card.component.html',
  styleUrls: ['./gift-card.component.css']
})
export class GiftCardComponent implements OnInit {
  @Input()
  public gifs!: Gif;

  ngOnInit(): void {
    if(!this.gifs) throw new Error("El componente requiere la propiedad Gif");
  }
}
