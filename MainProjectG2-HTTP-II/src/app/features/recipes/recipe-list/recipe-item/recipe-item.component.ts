import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {RecipeModel} from "../../../../shared/models/recipe.model";

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit{
  @Input('recipe2') recipe!: RecipeModel
  @Output() recipeSelected = new EventEmitter<void>();
  onItemClick() {
    this.recipeSelected.emit();
  }

  ngOnInit(): void {
    console.log('component ITEM initialized')
  }
}
