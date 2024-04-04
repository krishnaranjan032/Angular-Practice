import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recepe-list',
  templateUrl: './recepe-list.component.html',
  styleUrl: './recepe-list.component.css',
})
export class RecepeListComponent {
  recipes: Recipe[] = [
    new Recipe(
      'A Test recipe',
      'This is just done for testing purpose',
      'https://media.istockphoto.com/id/1363638825/photo/vegan-plant-based-asian-food-recipes-with-rice-and-brown-rice-as.webp?b=1&s=170667a&w=0&k=20&c=EXreVl3ug6ng9updrHKAFagrNctbOCIPDpaziJ6rVXg='
    ),
    new Recipe(
      'A Test recipe',
      'This is just done for testing purpose',
      'https://media.istockphoto.com/id/1363638825/photo/vegan-plant-based-asian-food-recipes-with-rice-and-brown-rice-as.webp?b=1&s=170667a&w=0&k=20&c=EXreVl3ug6ng9updrHKAFagrNctbOCIPDpaziJ6rVXg='
    ),
    new Recipe(
      'A Test recipe',
      'This is just done for testing purpose',
      'https://media.istockphoto.com/id/1363638825/photo/vegan-plant-based-asian-food-recipes-with-rice-and-brown-rice-as.webp?b=1&s=170667a&w=0&k=20&c=EXreVl3ug6ng9updrHKAFagrNctbOCIPDpaziJ6rVXg='
    ),
  ];
  constructor() {}
}
