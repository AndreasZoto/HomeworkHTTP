import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { RecipeModel } from 'src/app/shared/models/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private url = 'http://localhost:3000/recipes';

  constructor(private http: HttpClient) {}

  getRecipes(): Observable<RecipeModel[]> {
    let params = new HttpParams();
    params = params.append('_page', '2');
    params = params.append('_per_page', '10');
    return this.http.get<RecipeModel[]>(this.url, { params: params });
  }

  deleteRecipe(id: string): Observable<any> {
    return this.http.delete(`${this.url}/${id}`).pipe(
      tap(() => {
        console.log(`Recipe with ID ${id} deleted successfully.`);
      })
    );
  }

  addRecipe(newRecipe: RecipeModel): Observable<any> {
    return this.http.post(this.url, newRecipe);
  }

  updateRecipe(updatedRecipe: RecipeModel): Observable<any> {
    return this.http.put(`${this.url}/${updatedRecipe.id}`, updatedRecipe);
  }
}
