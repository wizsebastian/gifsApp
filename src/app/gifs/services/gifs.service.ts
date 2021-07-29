import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchGifsResponse } from '../interface/gifs.interfaces';

@Injectable({
  providedIn: 'root'
})
export class GifsService {
  private _history: string[] = [];
  private url: string = 'http://api.giphy.com/v1/gifs'
  private apiKey: string = '0DdSdxZMbprWJMABZCwGX2bQUVqHrPCK';
  private limit: number = 10;
  public results: Gif[] = []
  constructor(private http: HttpClient) {
    this._history = JSON.parse(localStorage.getItem('history')!) || [];
    this.results = 
    
    JSON.parse(localStorage.getItem('lastResults')!) || [];
  }

  get history() {
    return [...this._history]
  }
  searchGifs(query: string) {
    query = query.trim().toLowerCase();

    if (!this._history.includes(query)) {
      this._history.unshift(query);
      this._history = this._history.slice(0, 10);
      localStorage.setItem('history', JSON.stringify(this._history))
    }
    const params = new HttpParams()
    .set('api_key', this.apiKey)
    .set('limit', this.limit.toString())
    .set('q', query);

    this.http.get<SearchGifsResponse>(`${this.url}/search`, {params}).subscribe(
      (res) => {
        this.results = res.data;
        localStorage.setItem('lastResults', JSON.stringify(this.results))
      });
  }
}


// 2PkrwTat2KIIXky3f3flkzmqikrEnF3i