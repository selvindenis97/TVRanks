import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvShowsDiscoverComponent } from './tv-shows-discover.component';

describe('TvShowsDiscoverComponent', () => {
  let component: TvShowsDiscoverComponent;
  let fixture: ComponentFixture<TvShowsDiscoverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TvShowsDiscoverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TvShowsDiscoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
