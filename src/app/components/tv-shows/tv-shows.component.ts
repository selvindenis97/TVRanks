import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../services/shared/shared.service';

@Component({
  selector: 'app-tv-shows',
  templateUrl: './tv-shows.component.html',
  styleUrls: ['./tv-shows.component.css']
})
export class TvShowsComponent implements OnInit {

  constructor(
    private sharedService: SharedService
  ) {
    sharedService.closeNavbarSubject.next(false);
  }

  ngOnInit(): void {
  }

}
