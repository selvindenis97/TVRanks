import { Component, OnInit } from '@angular/core';
import { DiscoverService } from '../../services/discover/discover.service';
import { MoviesDiscoverApiRequest } from '../../models/api-request/movies-discover-api-request';
import { SharedService } from '../../services/shared/shared.service';
import { SearchService } from '../../services/search/search.service';
import { SearchApiRequest } from '../../models/api-request/search-api-request';

@Component({
  selector: 'app-movies',
  templateUrl: './movies-discover.component.html',
  styleUrls: ['./movies-discover.component.css']
})
export class MoviesDiscoverComponent implements OnInit {

  pageTitle: string = 'Discover Movies';

  movies: any[];

  movieParams: MoviesDiscoverApiRequest = new MoviesDiscoverApiRequest();

  searchParams: SearchApiRequest = new SearchApiRequest();

  searchTerm: string = '';

  constructor(
    private discoverService: DiscoverService,
    private sharedService: SharedService,
    private searchService: SearchService
  ) {
    sharedService.pageTitleSubject.next(this.pageTitle);
    sharedService.closeNavbarSubject.next(false);
  }

  ngOnInit(): void {
    this.loadMoviews();
  }

  loadMoviews() {
    this.discoverService.discoverMovies(this.movieParams)
      .subscribe((moviesResult) => {
        this.movies = moviesResult;
      }, (error) => {
      });
  }

  search() {
    if (this.searchTerm.length > 0) {
      this.searchParams.query = this.searchTerm;
      this.searchService.searchMovies(this.searchParams).subscribe((moviesSearchResult) => {
        this.movies = moviesSearchResult;
      })
    } else {
      this.loadMoviews();
    }
  }

}
