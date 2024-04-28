import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { RecipeModel } from 'src/app/shared/models/recipe.model';
import { RecipeService } from 'src/app/shared/services/recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<RecipeModel>();
  @ViewChild('inputElement') input!: ElementRef;
  recipes!: RecipeModel[];

  constructor(private recipeService: RecipeService) {}

  ngOnInit() {
    console.log('component initialized');
    this.getRecipes();
  }

  getRecipes() {
    this.recipeService.getRecipes().subscribe(data => {
      this.recipes = data;
    });
  }

  onSelected(recipe: RecipeModel) {
    this.recipeWasSelected.emit(recipe);
  }

  add() {
    console.log(this.input.nativeElement.value);
  }
}
