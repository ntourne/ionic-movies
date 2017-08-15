import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { FavoritesPage } from '../pages/favorites/favorites';
import { MoviesPage } from '../pages/movies/movies';
import { MovieDetailsPage } from '../pages/movie-details/movie-details';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MovieService } from "../providers/movie.service";

@NgModule({
  declarations: [
    MyApp,
    FavoritesPage,
    MoviesPage,
    MovieDetailsPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp,{

      tabsHideOnSubPages: true,

    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    FavoritesPage,
    MoviesPage,
    MovieDetailsPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    MovieService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
