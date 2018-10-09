import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
 
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class DataService {

   constructor(private http:HttpClient) {}
 
    // Uses http.get() to load data from a single API endpoint
    getSearchData() {
        return this.http.get('https://d3e6ys0v0tcm7i.cloudfront.net/json/1/searchList.json');
    }

}
