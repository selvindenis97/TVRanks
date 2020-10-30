import { Injectable } from '@angular/core';
import { Constants } from '../../shared/constants';
import { HttpWrapperService } from '../http-wrapper/http-wrapper.service';
import { MovieSingleApiRequest } from '../../models/api-request/movie-single-api-request';
import { ApiRequest } from '../../models/api-request/api-request';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TVShow } from '../../models/tv-show/tv-show';
import { Cast } from '../../models/cast/cast';
import { TVSingleApiRequest } from '../../models/api-request/tv-single-api-request';

@Injectable({
  providedIn: 'root'
})
export class TvShowService {

  private urlTvShow: string = Constants.apiUrl + '/tv';

  constructor(
    private httpWrapper: HttpWrapperService
  ) { }

  public getTvShowById(id: number, params?: TVSingleApiRequest): Observable<TVShow> {
    let url = this.urlTvShow + '/' + id;
    return this.httpWrapper.get(url, params).pipe(map(res => res as TVShow));
  }


  public getTvShowCast(id: number, params?: ApiRequest): Observable<Cast[]> {
    let url = this.urlTvShow + '/' + id + '/credits';
    return this.httpWrapper.get(url, params).pipe(map(res => res.cast as Cast[]));
  }
}
