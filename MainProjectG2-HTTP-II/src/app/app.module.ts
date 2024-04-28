import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './features/header/header.component';
import { RecipesComponent } from './features/recipes/recipes.component';
import { RecipeDetailComponent } from './features/recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './features/recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './features/shopping-list/shopping-list.component';
import {ShoppingEditComponent} from "./features/shopping-list/shopping-edit/shopping-edit.component";
import { RecipeListComponent } from './features/recipes/recipe-list/recipe-list.component';
import {BasicHighlightDirective} from "./shared/directives/basic-highlight.directive";
import { BetterHighlightDirective } from './shared/directives/better-highlight.directive';
import { UnlessDirective } from './shared/directives/unless.directive';
import {ShortenPipe} from "./shared/Pipes/shorten.pipe";
import { FilterPipe } from './shared/Pipes/filter.pipe';
import {FormsModule} from "@angular/forms";
import {LoggingService} from "./shared/services/logging.service";
import {AccountsService} from "./shared/services/accounts.service";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    RecipeListComponent,
    BasicHighlightDirective,
    BetterHighlightDirective,
    UnlessDirective,
    ShortenPipe,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [LoggingService, AccountsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
