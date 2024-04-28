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
  editedRecipe!: RecipeModel;

  constructor(private recipeService: RecipeService) {
    if (this.recipeCh) {
      this.editedRecipe = { ...this.recipeCh };
    }
  }

  deleteItem() {
    if (this.recipeCh && this.recipeCh.id) {
      this.recipeService.deleteRecipe(this.recipeCh.id).subscribe(response => {
        console.log(response);
      });
    } else {
      console.error('Recipe ID is undefined.');
    }
  }

  saveChanges() {
    if (this.editedRecipe && this.editedRecipe.id) {
      this.recipeService.updateRecipe(this.editedRecipe).subscribe(response => {
        console.log(response);
      });
    } else {
      console.error('Edited recipe or its ID is undefined.');
    }
  }
}
