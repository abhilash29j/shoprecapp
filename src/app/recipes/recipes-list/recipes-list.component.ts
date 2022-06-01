import { Component, OnInit } from '@angular/core';
import { Recipes } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
     recipes:Recipes[] =[
       new Recipes('A Test Recipe',"This is simply a test","https://static.parade.com/wp-content/uploads/2021/04/Breakfast-Tortilla-Wrap-4-e1611782558904.jpg"),
       new Recipes('A Test Recipe',"This is simply a test","https://static.parade.com/wp-content/uploads/2021/04/Breakfast-Tortilla-Wrap-4-e1611782558904.jpg"),
       new Recipes('A Test Recipe',"This is simply a test","https://static.parade.com/wp-content/uploads/2021/04/Breakfast-Tortilla-Wrap-4-e1611782558904.jpg")
     ];
  constructor() { }

  ngOnInit(): void {
  }

}
