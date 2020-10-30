import { ApiRequest } from './api-request';

export class MovieSingleApiRequest extends ApiRequest {
    language: string = 'en-US';

    constructor() {
        super();
    }
}