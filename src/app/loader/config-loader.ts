import { ConfigurationService } from '../services/configuration/configuration.service';
import { ApiRequest } from '../models/api-request/api-request';

export function ConfigLoader(configService: ConfigurationService) {
    return () => configService.getConfiguration(new ApiRequest());
}