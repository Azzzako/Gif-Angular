import { Component } from '@angular/core';
import { GifService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  constructor(private gifService: GifService){}

  get tagHistory(){
    return [...this.gifService.tagHistory]
  }

  public researchTag(tag: string):void {
    this.gifService.searchTag(tag)
  }
}
