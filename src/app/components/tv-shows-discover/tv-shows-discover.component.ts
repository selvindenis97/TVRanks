import { Component, OnInit } from '@angular/core';
import { TVShow } from '../../models/tv-show/tv-show';
import { DiscoverService } from '../../services/discover/discover.service';
import { TvDiscoverApiRequest } from '../../models/api-request/tv-discover-api-request';
import { SharedService } from '../../services/shared/shared.service';
import { SearchApiRequest } from '../../models/api-request/search-api-request';
import { SearchService } from '../../services/search/search.service';

@Component({
  selector: 'app-tv-shows-discover',
  templateUrl: './tv-shows-discover.component.html',
  styleUrls: ['./tv-shows-discover.component.css']
})
export class TvShowsDiscoverComponent implements OnInit {

  pageTitle: string = 'TV Shows';
  tvShows: TVShow[];
  tvShowsParams: TvDiscoverApiRequest = new TvDiscoverApiRequest();

  searchParams: SearchApiRequest = new SearchApiRequest();
  searchTerm: string = '';
  constructor(
    private discoverService: DiscoverService,
    private sharedService: SharedService,
    private searchService: SearchService
  ) {
    sharedService.pageTitleSubject.next(this.pageTitle);
    sharedService.closeNavbarSubject.next(false);
  }

  ngOnInit(): void {
    this.loadTvShows();
  }

  loadTvShows() {
    this.discoverService.discoverTv(this.tvShowsParams).subscribe((tvShowsResult) => {
      this.tvShows = tvShowsResult;
    });
  }

  search() {
    if (this.searchTerm.length > 0) {
      this.searchParams.query = this.searchTerm;
      this.searchService.searchTv(this.searchParams).subscribe((moviesSearchResult) => {
        this.tvShows = moviesSearchResult;
      })
    } else {
      this.loadTvShows();
    }
  }

}
