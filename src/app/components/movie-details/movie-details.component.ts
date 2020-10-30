import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../services/shared/shared.service';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../../services/movie/movie.service';
import { Movie } from '../../models/movie/movie';
import { MovieSingleApiRequest } from '../../models/api-request/movie-single-api-request';
import { ApiRequest } from '../../models/api-request/api-request';
import { Cast } from '../../models/cast/cast';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  pageTitle: string = 'Movies details';
  id: number;
  movie: Movie = new Movie();
  casts: Cast[] = [];
  movieParams: MovieSingleApiRequest = new MovieSingleApiRequest();
  castParams: ApiRequest = new ApiRequest();
  constructor(
    private sharedService: SharedService,
    private route: ActivatedRoute,
    private movieService: MovieService
  ) {
    sharedService.pageTitleSubject.next(this.pageTitle);
    sharedService.closeNavbarSubject.next(false);
  }

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.loadMovie();
  }

  loadMovie() {
    this.movieService.getMovieById(this.id, this.movieParams).subscribe((movieResult) => {
      this.movie = movieResult;
      this.sharedService.pageTitleSubject.next(this.movie.title);
    });

    this.movieService.getMovieCast(this.id, this.castParams).subscribe((castResult) => {
      this.casts = castResult;
    })
  }

}
