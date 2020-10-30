import { Pipe, PipeTransform } from '@angular/core';
import { Configuration } from '../../models/configuration/configuration';
import { ConfigurationService } from '../../services/configuration/configuration.service';

@Pipe({
  name: 'backdrop'
})
export class BackdropPipe implements PipeTransform {

  configuration: Configuration;
  constructor(private configurationService: ConfigurationService) {
    this.configuration = configurationService.configuration;
  }

  transform(value: string, ...args: string[]): string {
    return [
      this.configuration.images.base_url
      , this.configuration.images.backdrop_sizes[3]
      , value
    ].join('');
  }
}
