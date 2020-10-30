import { Pipe, PipeTransform } from '@angular/core';
import { Configuration } from '../../models/configuration/configuration';
import { ConfigurationService } from '../../services/configuration/configuration.service';

@Pipe({
  name: 'profileImage'
})
export class ProfileImagePipe implements PipeTransform {

  configuration: Configuration;
  constructor(private configurationService: ConfigurationService) {
    this.configuration = configurationService.configuration;
  }

  transform(value: string, gender: number): string {
    if (value) {
      return [
        this.configuration.images.base_url
        , this.configuration.images.profile_sizes[1]
        , value
      ].join('');
    } else {
      if (gender == 1) {
        return 'assets/images/femaleAvatar.jpg'
      } else {
        return 'assets/images/maleAvatar.png'

      }
    }

  }

}
