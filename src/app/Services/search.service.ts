import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface UrlListResponse {
  id: number
  url: string
  depth: number
  urlobj: string

 

}

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private httpClient: HttpClient) {}

  getUrls(){

    return this.httpClient.get('http://127.0.0.1:8000/api/UrlList');

  }
  newSearch(inputData: object){
    
    //return this.httpClient.post('http://127.0.0.1:8000/api/newView/', inputData);
    return this.httpClient.post('http://127.0.0.1:8000/api/newView', inputData);

    }
  

}
