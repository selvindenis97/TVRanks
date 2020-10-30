import { ApiRequest } from './api-request';

export class SearchApiRequest extends ApiRequest {
    query: string;
    page: number = 1;
    language: string = "en-US";
    constructor() {
        super();
    }
}