import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MovieService } from "../../providers/movie.service";
import { FavoritesPage } from "../favorites/favorites";
import { CommentService } from "../../providers/comment.service";

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})

export class ModalAbout {
  constructor(public navCtrl: NavController) {

  }

  ionViewDidEnter() {

  }
  dismiss() {
    
  }
}
