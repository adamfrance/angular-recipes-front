import { RecipesService } from './../core/services/recipes.service';
import { FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipes-filter',
  templateUrl: './recipes-filter.component.html',
  styleUrls: ['./recipes-filter.component.scss']
})
export class RecipesFilterComponent {

  recipeForm = this.fb.group({
    title: [''],
    category: [''],
    ingredient: [''],
    tags: [''],
    prepTime: [''],
    cookingTime: ['']
  })

  constructor(private service: RecipesService , private fb: FormBuilder) { }

  filterResults() {
    this.service.updateFilter(this.recipeForm.value);
  }

  clearFilter() {

  }

}
