import { Component } from '@angular/core';

import { FavoritesPage } from '../favorites/favorites';
import { MoviesPage } from '../movies/movies';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = MoviesPage;
  tab2Root = FavoritesPage;

  constructor() {

  }
}
