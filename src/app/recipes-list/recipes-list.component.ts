import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RecipesService } from '../core/services/recipes.service';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecipesListComponent {
  // recipes!: Recipe[];
  // destroy$ = new Subject();
  // subscription!: Subscription;
  recipes$ = this.service.recipes$;
  constructor(private service: RecipesService) {}

  // ngOnInit(): void {
  //   this.subscription = this.service.getRecipes().subscribe(result => {
  //     this.recipes = result
  //   })
  // }

  // ngOnDestroy() : void {
  //   this.subscription.unsubscribe()
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
