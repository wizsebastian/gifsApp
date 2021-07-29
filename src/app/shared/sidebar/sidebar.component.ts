import { Component } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  constructor(private gifsService: GifsService) { }

  get items() {
    return this.gifsService.history;
  }

  searchAgain(item: string){
    this.gifsService.searchGifs(item);
  }

}
