import { ApiRequest } from './api-request';

export class MoviesDiscoverApiRequest extends ApiRequest {
    sort_by: string;

    constructor() {
        super();
    }
}