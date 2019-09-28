import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowValueOfStoreComponent } from './show-value-of-store.component';

describe('ShowValueOfStoreComponent', () => {
  let component: ShowValueOfStoreComponent;
  let fixture: ComponentFixture<ShowValueOfStoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowValueOfStoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowValueOfStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
