import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../services/shared/shared.service';
import { ActivatedRoute } from '@angular/router';
import { TvShowService } from '../../services/tv-show/tv-show.service';
import { TVShow } from '../../models/tv-show/tv-show';
import { TVSingleApiRequest } from '../../models/api-request/tv-single-api-request';
import { Cast } from '../../models/cast/cast';
import { ApiRequest } from '../../models/api-request/api-request';

@Component({
  selector: 'app-tv-show-details',
  templateUrl: './tv-show-details.component.html',
  styleUrls: ['./tv-show-details.component.css']
})
export class TvShowDetailsComponent implements OnInit {

  pageTitle: string = "Tv Show Details";
  id: number;
  tvShow: TVShow = new TVShow();
  casts: Cast[] = [];
  tvShowParams: TVSingleApiRequest = new TVSingleApiRequest();
  castParams: ApiRequest = new ApiRequest();
  constructor(
    private sharedService: SharedService,
    private route: ActivatedRoute,
    private tvShowService: TvShowService
  ) {
    sharedService.pageTitleSubject.next(this.pageTitle);
    sharedService.closeNavbarSubject.next(false);
  }

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.loadTvShow();
  }

  loadTvShow() {
    this.tvShowService.getTvShowById(this.id, this.tvShowParams).subscribe((tvShowResults) => {
      this.tvShow = tvShowResults;
      this.pageTitle = this.tvShow.name;
    });
    this.tvShowService.getTvShowCast(this.id, this.castParams).subscribe((castResults) => {
      this.casts = castResults;
    });
  }
}
