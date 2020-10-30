import { Injectable } from '@angular/core';
import { Constants } from '../../shared/constants';
import { HttpWrapperService } from '../http-wrapper/http-wrapper.service';
import { MovieSingleApiRequest } from '../../models/api-request/movie-single-api-request';
import { Observable } from 'rxjs';
import { Movie } from '../../models/movie/movie';
import { map } from 'rxjs/operators';
import { Cast } from '../../models/cast/cast';
import { ApiRequest } from '../../models/api-request/api-request';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private urlMovies: string = Constants.apiUrl + '/movie';
  constructor(
    private httpWrapper: HttpWrapperService
  ) { }

  public getMovieById(id: number, params?: MovieSingleApiRequest): Observable<Movie> {
    let url = this.urlMovies + '/' + id;
    return this.httpWrapper.get(url, params).pipe(map(res => res as Movie));
  }


  public getMovieCast(id: number, params?: ApiRequest): Observable<Cast[]> {
    let url = this.urlMovies + '/' + id + '/credits';
    return this.httpWrapper.get(url, params).pipe(map(res => res.cast as Cast[]));
  }
}
