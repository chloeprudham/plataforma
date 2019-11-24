import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetingPointComponent } from './meeting-point.component';

describe('MeetingPointComponent', () => {
  let component: MeetingPointComponent;
  let fixture: ComponentFixture<MeetingPointComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeetingPointComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeetingPointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
