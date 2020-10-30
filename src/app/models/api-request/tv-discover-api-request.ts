import { ApiRequest } from './api-request';

export class TvDiscoverApiRequest extends ApiRequest {
    sort_by: string;

    constructor() {
        super();
    }
}