import { Injectable } from '@angular/core';
import { HttpWrapperService } from '../http-wrapper/http-wrapper.service';
import { SearchApiRequest } from '../../models/api-request/search-api-request';
import { Constants } from '../../shared/constants';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Movie } from '../../models/movie/movie';
import { TVShow } from '../../models/tv-show/tv-show';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private urlSearch = Constants.apiUrl + '/search';

  constructor(
    private httpWrapper: HttpWrapperService
  ) { }

  public searchMovies(params: SearchApiRequest): Observable<Movie[]> {
    let url = this.urlSearch + '/movie';
    return this.httpWrapper.get(url, params).pipe(map(res => res.results as Movie[]));
  }

  public searchTv(params: SearchApiRequest): Observable<TVShow[]> {
    let url = this.urlSearch + '/movie';
    return this.httpWrapper.get(url, params).pipe(map(res => res.results as TVShow[]));
  }
}
