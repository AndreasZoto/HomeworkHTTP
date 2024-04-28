import {
  Component,
  ElementRef,
  EventEmitter,
  OnChanges,
  OnInit,
  Output,
  ViewChild
} from '@angular/core';
import {RecipeModel} from "../../../shared/models/recipe.model";
import {HttpClient, HttpParams} from "@angular/common/http";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() recipeWasSelected = new EventEmitter<RecipeModel>();
  @ViewChild('inputElement') input!: ElementRef;

  recipes!: RecipeModel[];
  url = 'http://localhost:3000/recipes'
  constructor(
    private http: HttpClient,
  ) {
  }

  ngOnInit() {
    console.log('component initialized')
    this.getRecipes()
  }


  getRecipes() {
    // posts?_page=1&_per_page=25
    let params = new HttpParams();
    params = params.append('_page', '2')
    params = params.append('_per_page', '10')
    this.http.get<any>(this.url, {
      params: params
    }).subscribe( data => {
      this.recipes = data.data;
    })
  }

  onSelected(recipe: RecipeModel) {
    this.recipeWasSelected.emit(recipe)
  }
  // inputChange(event: any) {
  //   console.log(event.target.value)
  // }

  add() {
    // console.log(input.value)
    console.log(this.input.nativeElement.value)
  }

}
