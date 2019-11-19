import { Injectable } from '@angular/core';
import {searchQuery} from '../../searchQuery';
import { HttpHeaders, HttpClient } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type':'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class MedicalSearchService {

  constructor(private http: HttpClient) { }
   userSearchService(search: searchQuery) {
    console.log('service ' + search.searchTerm);  
    search.domain = 'medical';
      return this.http.post('https://knowably.stackroute.io:8080/queryservice/api/v1/query', search, httpOptions)
    }
    private _searchQuery: searchQuery;
    suggestionSearchService(searchTerm) {
      let domain = "medical";
      this._searchQuery = {
        searchTerm,
        domain
      };
      console.log('service ' + this._searchQuery.domain + this._searchQuery.searchTerm);
        return this.http.post('https://knowably.stackroute.io:8080/queryservice/api/v1/query', this._searchQuery, httpOptions)
      }
}
