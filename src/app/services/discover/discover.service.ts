import { Injectable } from '@angular/core';
import { HttpWrapperService } from '../http-wrapper/http-wrapper.service';
import { Constants } from '../../shared/constants';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Movie } from '../../models/movie/movie';
import { MoviesDiscoverApiRequest } from '../../models/api-request/movies-discover-api-request';
import { TvDiscoverApiRequest } from '../../models/api-request/tv-discover-api-request';
import { TVShow } from '../../models/tv-show/tv-show';

@Injectable({
  providedIn: 'root'
})
export class DiscoverService {

  private urlDiscover: string = Constants.apiUrl + '/discover';
  constructor(
    private httpWrapper: HttpWrapperService
  ) {
  }

  public discoverMovies(params?: MoviesDiscoverApiRequest): Observable<Movie[]> {
    let url = this.urlDiscover + '/movie';
    return this.httpWrapper.get(url, params).pipe(
      map(res => res.results.slice(0, 10) as Movie[])
    );
  }

  public discoverTv(params?: TvDiscoverApiRequest): Observable<TVShow[]> {
    let url = this.urlDiscover + '/tv';
    return this.httpWrapper.get(url, params).pipe(
      map(res => res.results.slice(0, 10) as TVShow[])
    );
  }
}
