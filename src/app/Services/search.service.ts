import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private httpClient: HttpClient) {}
  newSearch(inputData: object){
    
    //return this.httpClient.post('http://127.0.0.1:8000/api/newView/', inputData);
    return this.httpClient.post('http://127.0.0.1:8000/api/newView', inputData);
    }
  

}
