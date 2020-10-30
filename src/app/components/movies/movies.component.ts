import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../services/shared/shared.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  constructor(
    private sharedService: SharedService
  ) {
    sharedService.closeNavbarSubject.next(false);
  }

  ngOnInit(): void {
  }

}
