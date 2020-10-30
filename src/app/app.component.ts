import { Component } from '@angular/core';
import { ConfigurationService } from './services/configuration/configuration.service';
import { ApiRequest } from './models/api-request/api-request';
import { SharedService } from './services/shared/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TVRanks';
  pageTitle: string = "Home";
  configurationParams: ApiRequest = new ApiRequest();
  loadedConfigs: boolean = false;
  navToggle: boolean = false;

  constructor(
    private configurationService: ConfigurationService,
    private sharedService: SharedService
  ) {
    sharedService.pageTitleSubject.subscribe((title) => {
      this.pageTitle = title;
    })
    sharedService.closeNavbarSubject.subscribe((close) => {
      this.navToggle = close;
    })
  }
}
