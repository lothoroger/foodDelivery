import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CuisineService {

  constructor(private httpClient: HttpClient) { }

  getProducts() {
    return this.httpClient.get<any[]>("/assets/data/cuisineDB.json");
  }
}