import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  constructor(private http: HttpClient) { }

  private url = 'https://api.giphy.com/v1/gifs/search';
  //private api_key = 'LKFNOSU7tP2JHbRIf28Ei3ZohoKIAB3r';
  private api_key = 'EUeUN0Cc3C6iNk7qz56pmg9I8bvbrk3R';
  private limit = '24';

  getGifs(q) {
    let url = `${this.url}?api_key=${this.api_key}&q=${q}&limit=${this.limit}`

    return this.http.get(url);
  }
}