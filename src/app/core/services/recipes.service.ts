import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of, catchError, BehaviorSubject } from 'rxjs';
import { Recipe } from '../model/recipe.model';
const BASE_PATH=environment.basePath


@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  recipes$ = this.http.get<Recipe[]>(`${BASE_PATH}/recipes`).pipe(
    catchError(error => of([]))
      )

  private filterRecipeSubject = new BehaviorSubject<Recipe>({ title: '' });
  // extraire la valeur de ce flux
  filterRecipeAction$ = this.filterRecipeSubject.asObservable();

  constructor(private http: HttpClient) {}

  // getRecipes(): Observable<Recipe[]> {
  //   return this.http.get<Recipe[]>(`${BASE_PATH}/recipes`)
  // }

  updateFilter(criteria : any) {
    this.filterRecipeSubject.next(criteria)
  }
}

