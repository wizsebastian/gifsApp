import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  @ViewChild('searchInput') searchInput!: ElementRef<HTMLInputElement>

  constructor(private gifsService: GifsService) { }

  search() {
    const value = this.searchInput.nativeElement.value;

    this.gifsService.searchGifs(value)

    // clean input
    this.searchInput.nativeElement.value = '';
  }
}
