import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowValueOfStoreComponent } from './show-value-of-store.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from '../store/reducers';

describe('ShowValueOfStoreComponent', () => {
  let component: ShowValueOfStoreComponent;
  let fixture: ComponentFixture<ShowValueOfStoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot(reducers, {
          metaReducers,
          runtimeChecks: {
            strictStateImmutability: true,
            strictActionImmutability: true
          }
        })
      ],
      declarations: [ShowValueOfStoreComponent]
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

  it('should have text', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('p[data-id="My State"]').textContent).toContain('My State');
    expect(compiled.querySelector('p[data-id="First Variable"]').textContent).toContain('First Variable');
    expect(compiled.querySelector('p[data-id="Second Variable"]').textContent).toContain('Second Variable');
  });
});
