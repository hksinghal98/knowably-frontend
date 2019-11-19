import { Injectable } from '@angular/core';
import { searchQuery } from 'src/searchQuery';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type':'application/json'})
};
@Injectable({
  providedIn: 'root'
})
export class MovieSearchService {

  constructor(private http:HttpClient) { }
  userSearchService(search:searchQuery){
    search.domain = "movie";
    console.log("service "+search.searchTerm);
    console.log(search.domain);
    return this.http.post("https://knowably.stackroute.io:8080/queryservice/api/v1/query", search, httpOptions)
  }

  private _searchQuery: searchQuery;
  suggestionSearchService(searchTerm) {
    let domain = "movie";
    this._searchQuery = {
      searchTerm,
      domain
    };
    console.log('service ' + this._searchQuery.domain + this._searchQuery.searchTerm);
      return this.http.post('https://knowably.stackroute.io:8080/queryservice/api/v1/query', this._searchQuery, httpOptions)
    }
}
