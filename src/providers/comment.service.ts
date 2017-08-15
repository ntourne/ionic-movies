import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';


@Injectable()
export class CommentService {
    

    baseUrl = "http://59936934d297ba0011da1ab4.mockapi.io";

    constructor(public http: Http) { }


    /**
     * Get comments by movie
     * @param movieId 
     */
    getCommentsByMovie(movieId: string) {
        
        return this.http.get(this.baseUrl + '/comments')
            .map(response => response.json())
            .map(response => response.results);
    }


    /**
     * Post a new comment
     * @param movieId 
     * @param text 
     */
    postComment(movieId: string, text: string) {
        let data = {
            movieId: movieId,
            text: text
        }
        return this.http.post(this.baseUrl + '/comments', data)
            .map(response => response.json())
            .map(response => response.results);
    }


}