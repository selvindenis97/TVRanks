import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesComponent } from './components/movies/movies.component';
import { TvShowsComponent } from './components/tv-shows/tv-shows.component';
import { MoviesDiscoverComponent } from './components/movies-discover/movies-discover.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { TvShowsDiscoverComponent } from './components/tv-shows-discover/tv-shows-discover.component';
import { TvShowDetailsComponent } from './components/tv-show-details/tv-show-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/movies', pathMatch: 'full' },
  {
    path: 'movies', component: MoviesComponent, children: [
      {
        path: '',
        component: MoviesDiscoverComponent
      },
      {
        path: 'details/:id',
        component: MovieDetailsComponent
      }
    ]
  },
  {
    path: 'tv', component: TvShowsComponent, children: [
      {
        path: '',
        component: TvShowsDiscoverComponent
      },
      {
        path: 'details/:id',
        component: TvShowDetailsComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
