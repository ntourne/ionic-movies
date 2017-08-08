import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MovieService } from "../../providers/movie.service";
import { FavoritesPage } from "../favorites/favorites";

@Component({
	selector: 'page-movie-details',
	templateUrl: 'movie-details.html'
})
export class MovieDetailsPage {
	FavMsg: string;

	movie: any = null;
	colorBottom: any = "danger";
	constructor(public navCtrl: NavController, public movieService: MovieService, private navParams: NavParams) {
		this.movie = navParams.get('movie');
	}

	onAddFavorite(movie) {
		this.movieService.addFavoriteMovie(movie);
		this.colorBottom = "light";
		this.FavMsg = "The movie has successfully added to Favorites tab";
	}

	ionViewDidLoad() {

	}

	onSearch(query: string) {

	}

}
