import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MovieService } from "../../providers/movie.service";
import { FavoritesPage } from "../favorites/favorites";
import { CommentService } from "../../providers/comment.service";
import { SocialSharing } from '@ionic-native/social-sharing';

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
	comment: string = '';
	ShareComment: string = '';



	constructor(public navCtrl: NavController, public movieService: MovieService, private navParams: NavParams, public commentService: CommentService, private socialSharing: SocialSharing) {
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
		this.commentService.getCommentsByMovie(this.movie.id).subscribe((data: any) => {
			this.comments = data;
			console.log(this.comments);
		})
	}

	onSearch(query: string) {

	}


	addComment() {
		this.commentService.postComment(this.movie.id, this.comment);
		this.comments.push({ text: this.comment });
		this.comment = '';
	}
	onShareTwitter() {
		
		
		this.socialSharing.shareViaTwitter(`Estoy viendo ${this.movie.title}`, `http://image.tmdb.org/t/p/w185${this.movie.backdrop_path}`, `https://www.themoviedb.org/movie/${this.movie.id}` ).then(() => {
			// Success!
		})

	}
}
