import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MovieService } from "../../providers/movie.service";

@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html'
})
export class FavoritesPage {
  favMovies: any[] = [];
  constructor(public navCtrl: NavController, public movieService: MovieService) {

  }

  ionViewDidEnter() {
    this.favMovies = this.movieService.getFavoriteMovies();
   
  }

}
