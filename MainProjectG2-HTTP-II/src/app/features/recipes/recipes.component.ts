import { Component } from '@angular/core';
import {RecipeModel} from "../../shared/models/recipe.model";
import {LoggingService} from "../../shared/services/logging.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent {

  name: string = '';
  desc: string= '';
  imgUrl: string = '';


  constructor(
    private logging: LoggingService,
    private http: HttpClient
    ) {
    // console.log('RecipesComponent constructor');
    // console.log(this.logging.getStatus())
    // this.logging.setStatus('RecipesComponent')
    // console.log(this.logging.getStatus())
  }
  url = 'http://localhost:3000/recipes'

  recipe!: RecipeModel

  recipes!: RecipeModel[]

  // getRecipes() {
  //   this.http.get<RecipeModel[]>(this.url).subscribe( data => {
  //     this.recipes = data;
  //   })
  // }

  postNewItem() {
    const newItem = {
      name: this.name,
      description: this.desc,
      imgUrl: this.imgUrl
    }
    this.http.post(this.url, newItem).subscribe( data => {
      console.log(data)
    })
  }

}
