import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesComponent } from './components/movies/movies.component';
import { HttpClientModule } from '@angular/common/http';
import { ConfigurationService } from './services/configuration/configuration.service';
import { ConfigLoader } from './loader/config-loader';
import { PosterPipe } from './pipes/poster/poster.pipe';
import { CardPosterPipe } from './pipes/card-poster/card-poster.pipe';
import { TvShowsComponent } from './components/tv-shows/tv-shows.component';
import { TruncatePipe } from './pipes/truncate/truncate.pipe';
import { MoviesDiscoverComponent } from './components/movies-discover/movies-discover.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { FormsModule } from '@angular/forms';
import { TvShowDetailsComponent } from './components/tv-show-details/tv-show-details.component';
import { TvShowsDiscoverComponent } from './components/tv-shows-discover/tv-shows-discover.component';
import { BackdropPipe } from './pipes/backdrop/backdrop.pipe';
import { ProfileImagePipe } from './pipes/profile-image/profile-image.pipe';
import { JoinPipe } from './pipes/join/join.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    PosterPipe,
    CardPosterPipe,
    TvShowsComponent,
    TruncatePipe,
    MovieDetailsComponent,
    MoviesDiscoverComponent,
    TvShowDetailsComponent,
    TvShowsDiscoverComponent,
    BackdropPipe,
    ProfileImagePipe,
    JoinPipe
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    ConfigurationService,
    {
      provide: APP_INITIALIZER,
      useFactory: ConfigLoader,
      deps: [ConfigurationService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
