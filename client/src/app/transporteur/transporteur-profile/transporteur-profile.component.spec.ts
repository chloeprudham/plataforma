import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransporteurProfileComponent } from './transporteur-profile.component';

describe('TransporteurProfileComponent', () => {
  let component: TransporteurProfileComponent;
  let fixture: ComponentFixture<TransporteurProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransporteurProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransporteurProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
