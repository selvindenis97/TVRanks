import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  public pageTitleSubject: BehaviorSubject<string> = new BehaviorSubject<string>('Home');
  public closeNavbarSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  constructor() { }
}
