import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProuctDetailComponent } from './prouct-detail.component';

describe('ProuctDetailComponent', () => {
  let component: ProuctDetailComponent;
  let fixture: ComponentFixture<ProuctDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProuctDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProuctDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
