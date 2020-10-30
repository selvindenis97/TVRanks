import { Pipe, PipeTransform } from '@angular/core';
import { ConfigurationService } from '../../services/configuration/configuration.service';
import { Configuration } from '../../models/configuration/configuration';

@Pipe({
  name: 'poster'
})
export class PosterPipe implements PipeTransform {

  configuration: Configuration;
  constructor(private configurationService: ConfigurationService) {
    this.configuration = configurationService.configuration;
  }

  transform(value: string, ...args: string[]): string {
    return [
      this.configuration.images.base_url
      , this.configuration.images.poster_sizes[4]
      , value
    ].join('');
  }

}
