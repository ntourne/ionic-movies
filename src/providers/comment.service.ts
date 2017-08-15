import { Injectable } from '@angular/core';
import { Http, RequestOptions, RequestOptionsArgs } from '@angular/http';
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
            .map(response => response.json().filter((comment: any) => comment.movieId == movieId));
    }


    /**
     * Post a new comment
     * @param movieId 
     * @param text 
     */
    postComment(movieId: string, text: string) {

        var headers = new Headers();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json' );

        this.http.post(this.baseUrl + '/comments',
            {
                movieId: movieId,
                text: text
            })
            .map(res => res.json())
            .subscribe(data => {
            console.log(data); 
            });

        // return this.http.post(this.baseUrl + '/comments', data);
    }


}