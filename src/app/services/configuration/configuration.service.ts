import { Injectable } from '@angular/core';
import { HttpWrapperService } from '../http-wrapper/http-wrapper.service';
import { ApiRequest } from '../../models/api-request/api-request';
import { Constants } from '../../shared/constants';
import { tap } from 'rxjs/operators'
import { Configuration } from '../../models/configuration/configuration';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {

  public configuration: Configuration;
  urlConfiguration: string = Constants.apiUrl + '/configuration';

  constructor(
    private httpWrapper: HttpWrapperService
  ) { }

  getConfiguration(params: ApiRequest): Promise<Configuration> {
    return this.httpWrapper.get(this.urlConfiguration, params).pipe(
      tap(conf => {
        this.configuration = conf;
      })
    ).toPromise();
  }
}
