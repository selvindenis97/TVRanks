import { ApiRequest } from './api-request';

export class TVSingleApiRequest extends ApiRequest {
    language: string = 'en-US';

    constructor() {
        super();
    }
}