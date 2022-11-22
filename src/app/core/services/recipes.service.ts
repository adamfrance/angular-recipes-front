import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Recipe } from '../model/recipe.model';
const BASE_PATH=environment.basePath


@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  recipes$ = this.http.get<Recipe[]>(`${BASE_PATH}/recipes`);

  constructor(private http: HttpClient) {}

  // getRecipes(): Observable<Recipe[]> {
  //   return this.http.get<Recipe[]>(`${BASE_PATH}/recipes`)
  // }
}

