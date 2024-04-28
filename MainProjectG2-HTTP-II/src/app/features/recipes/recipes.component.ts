import { Component } from '@angular/core';
import { RecipeModel } from '../../shared/models/recipe.model';
import { RecipeService } from 'src/app/shared/services/recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent {

  name: string = '';
  desc: string = '';
  imgUrl: string = '';

  recipe: RecipeModel | undefined;

  constructor(private recipeService: RecipeService) {}

  onRecipeSelected(recipe: RecipeModel) {
    this.recipe = recipe;
  }

  postNewItem() {
    const newItem: RecipeModel = {
      name: this.name,
      description: this.desc,
      imgUrl: this.imgUrl
    };
    this.recipeService.addRecipe(newItem).subscribe(response => {
      console.log(response);
    });
  }
}
