import { Component, Input } from '@angular/core';
import { RecipeModel } from 'src/app/shared/models/recipe.model';
import { RecipeService } from 'src/app/shared/services/recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent {
  @Input() recipeCh!: RecipeModel;

  constructor(private recipeService: RecipeService) {}

  deleteItem() {
    if (this.recipeCh && this.recipeCh.id) {
      this.recipeService.deleteRecipe(this.recipeCh.id).subscribe(response => {
        console.log(response);
      });
    } else {
      console.error('Recipe ID is undefined.');
    }
  }
  
}
