import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MovieService } from "../../providers/movie.service";
import { ModalController, Platform, NavParams, ViewController } from 'ionic-angular';
import { MovieDetailsPage } from "../movie-details/movie-details";
@Component({
	selector: 'page-movies',
	templateUrl: 'movies.html'
})
export class MoviesPage {

	movies: any[] = null;
    search: any[] = [];
	constructor(public navCtrl: NavController, public movieService: MovieService) {

	}
	
	onOpenMovie(movie){
		this.navCtrl.push(MovieDetailsPage,{
			movie:movie
		});
	}

	ionViewDidLoad() {
		this.movieService.discover().subscribe((data: any) => {
			this.movies = data;
			console.log(this.movies);
		})
	}

	onSearch(query: string) {
		console.log(query);
		this.movieService.search(query).subscribe((data: any) => {
			this.movies = data;
			console.log(this.search);
		})
	}

}

