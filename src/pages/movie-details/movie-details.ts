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
	comments: any[] = [];
	tabBarElement: any;


	constructor(public navCtrl: NavController, public movieService: MovieService, private navParams: NavParams) {
		this.movie = navParams.get('movie');
		this.movie.isInFavorite = this.movieService.isMovieInFavorites(this.movie);
	}


	onAddOrRemoveFavorite() {

		if (this.movie.isInFavorite) {
			this.movieService.deleteFavoriteMovie(this.movie);
			this.movie.isInFavorite = false;
			this.FavMsg = "The movie has been removed from Favorites";
		}
		else {
			this.movieService.addFavoriteMovie(this.movie);
			this.movie.isInFavorite = true;
			this.FavMsg = "The movie has successfully added to Favorites tab";
		}

	}

	
	ionViewDidLoad() {

		this.comments.push({
			name: 'Juan',
			text: 'Que buena pelicula'
		});

		this.comments.push({
			name: 'Juan',
			text: 'Que buena pelicula'
		});

		this.comments.push({
			name: 'Juan',
			text: 'Que buena pelicula'
		});
	}

	onSearch(query: string) {

	}
}
