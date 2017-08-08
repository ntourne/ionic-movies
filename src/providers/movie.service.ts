import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';


@Injectable()
export class MovieService {
    data: any;
    API_KEY = "11c6235831bfcf4e28ee2f286f7ef58e";

    favoriteMovies: any[] = [];

    constructor(public http: Http) { }


    discover() { 
        let BASE_URL = "https://api.themoviedb.org/3/discover/movie?api_key=%API_KEY%";
        let baseUrl = BASE_URL.replace("%API_KEY%", this.API_KEY);
        return this.http.get(baseUrl)
            .map(response => response.json())
            .map(response => response.results); 
    }


    search(query: string) {
        let BASE_URL = "https://api.themoviedb.org/3/search/movie?api_key=%API_KEY%&query=%QUERY%";
        let baseUrl = BASE_URL.replace("%API_KEY%", this.API_KEY);
        baseUrl = baseUrl.replace("%QUERY%", query);
        return this.http.get(baseUrl)
            .map(response => response.json())
            .map(response => response.results);
    }


    addFavoriteMovie(movie: any) {

        var exists = false;

        // Check if movie exists
        this.favoriteMovies.forEach((m: any) => {
            if (m.id == movie.id)
                exists = true;
        })

        if (!exists)
            this.favoriteMovies.push(movie);
    }


    getFavoriteMovies() {
        return this.favoriteMovies;
    }

}