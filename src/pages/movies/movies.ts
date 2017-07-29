import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MovieService } from "../../providers/movie.service";

@Component({
	selector: 'page-movies',
	templateUrl: 'movies.html'
})
export class MoviesPage {

	movies: any[] = null;

	constructor(public navCtrl: NavController, public movieService: MovieService) {

	}


	ionViewDidLoad() {
		this.movieService.discover().subscribe((data: any) => {
			this.movies = data;
		})
	}

	onSearch(query: string) {
		this.movieService.search("terminator").subscribe((data: any) => {
			this.movies = data;
		})
	}

}
