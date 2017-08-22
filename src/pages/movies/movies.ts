import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MovieService } from "../../providers/movie.service";
import { ModalController, Platform, NavParams, ViewController } from 'ionic-angular';
import { MovieDetailsPage } from "../movie-details/movie-details";
import { ModalAbout } from "../about/about";

@Component({
	selector: 'page-movies',
	templateUrl: 'movies.html'
})
export class MoviesPage {

	movies: any[] = null;
	search: any[] = [];
	loading: boolean = false;

	constructor(public navCtrl: NavController, public movieService: MovieService, public modalCtrl: ModalController) {

	}

	onOpenMovie(movie) {
		this.navCtrl.push(MovieDetailsPage, {
			movie: movie
		});
	}

	ionViewDidLoad() {

		this.loading = true;
		setTimeout(() => {
			this.movieService.discover().subscribe((data: any) => {
				this.movies = data;
				this.loading = false;
				console.log(this.movies);
			})
		}, 2000);

	}


	onSearch(query: string) {
		console.log(query);
		this.movieService.search(query).subscribe((data: any) => {
			this.movies = data;
			console.log(this.search);
		})
	}
	onAbout() {
		let aboutModal = this.modalCtrl.create(ModalAbout);
		aboutModal.present();
	}
}

