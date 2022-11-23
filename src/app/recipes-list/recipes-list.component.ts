import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { BehaviorSubject, Subject, takeUntil, combineLatest, map } from 'rxjs';
import { Recipe } from '../core/model/recipe.model';
import { RecipesService } from '../core/services/recipes.service';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecipesListComponent {
  // filteredRecipes: Recipe[] = [];
  // recipes: Recipe[] = [];
  // private destroy$: Subject<boolean> = new Subject<boolean>();
  // subscription!: Subscription;
  recipes$ = this.service.recipes$;
  // creation du flux d'action
  filterRecipeAction$=this.service.filterRecipeAction$;


  filteredRecipes$ = combineLatest([
    this.recipes$,
    this.filterRecipeAction$,
  ]).pipe(
    map(([recipes, filter]: [Recipe[], Recipe]) => {
      return recipes.filter(
        (recipe) =>
          recipe.title?.indexOf(filter?.title?.toLowerCase() ?? '') != -1
      );
    })
  );

  constructor(private service: RecipesService) {}

  // ngOnInit(): void {
  //   this.service.recipes$.pipe(
  //     takeUntil(this.destroy$)
  //   ).subscribe( recipes => {
  //     this.recipes = recipes;
  //     this.filteredRecipes = recipes;
  //   })
  // }

  // ngOnDestroy() : void {
  //   this.destroy$.next(true);
  //   this.destroy$.unsubscribe();
  // }

  // filterResults() {
  //   //filtration cote front
  //  // this.filteredRecipes = this.recipes.filter(recipe => recipe.title?.indexOf(this.recipeForm.value.title) != -1)
  //   //filtration cote api
  //   this.http.get<Recipe[]>(`${BASE_PATH}/recipes`, {params : {criteria : this.recipeForm.value}})
  // }

  // ngOnInit(): void {
  //   this.service
  //     .getRecipes()
  //     .pipe(takeUntil(this.destroy$))
  //     .subscribe((result) => {
  //       this.recipes = result;
  //     });
  // }

  // ngOnDestroy(): void {
  //     // this.destroy$.next();
  //     this.destroy$.complete();
  // }
}
