import { Cast } from '../cast/cast';
import { Episode } from './episode';
import { ProductionCompany } from '../shared/production-company';
import { Season } from './season';
import { Genre } from '../shared/genre';

export class TVShow {
    original_name: string;
    genre_ids: number[];
    name: string;
    popularity: number;
    origin_country: string[];
    vote_count: number;
    first_air_date: Date;
    backdrop_path: string;
    original_language: string;
    id: number;
    vote_average: number;
    overview: string;
    poster_path: string;

    created_by: Cast[];
    episode_runtime: number[];
    in_production: boolean;
    languages: string[];
    last_air_date: Date;
    last_episode_to_air: Episode;
    next_episode_to_air: Episode;
    networks: ProductionCompany[];
    number_of_episodes: number;
    number_of_seasons: number;
    production_companies: ProductionCompany[];
    seasons: Season[];
    status: string;
    type: string;
    genres: Genre[];

    constructor() { }
}