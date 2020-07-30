import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PastStoriesComponent } from './past-stories.component';

describe('PastStoriesComponent', () => {
  let component: PastStoriesComponent;
  let fixture: ComponentFixture<PastStoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PastStoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PastStoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
