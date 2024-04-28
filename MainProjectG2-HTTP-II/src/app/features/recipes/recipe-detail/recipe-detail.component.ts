import {Component, Input} from '@angular/core';
import {RecipeModel} from "../../../shared/models/recipe.model";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent {

  @Input() recipeCh!: RecipeModel;
  url = 'http://localhost:3000/recipes'

  constructor(
    private http: HttpClient,
  ) {
  }

  deleteItem() {

    this.http.delete(this.url + '/' + this.recipeCh.id, {
      params: new HttpParams().set('id', this.recipeCh.id as string),
    } ).subscribe(value =>
    {
      console.log(value)

    })
  }
}
