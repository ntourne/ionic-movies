import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MovieService } from "../../providers/movie.service";

@Component({
	selector: 'page-movie-details',
	templateUrl: 'movie-details.html'
})
export class MovieDetailsPage {

	movies: any[] = null;

	constructor(public navCtrl: NavController, public movieService: MovieService) {

	}


	ionViewDidLoad() {

	}

	onSearch(query: string) {

	}

}
