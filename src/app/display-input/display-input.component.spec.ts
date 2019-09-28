import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayInputComponent } from './display-input.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ShowValueOfStoreComponent } from '../show-value-of-store/show-value-of-store.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from '../store/reducers';

describe('DisplayInputComponent', () => {
  let component: DisplayInputComponent;
  let fixture: ComponentFixture<DisplayInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, FormsModule,
        StoreModule.forRoot(reducers, {
          metaReducers,
          runtimeChecks: {
            strictStateImmutability: true,
            strictActionImmutability: true
          }
        })
      ],
      declarations: [DisplayInputComponent, ShowValueOfStoreComponent],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayInputComponent);
    component = fixture.componentInstance;
    component.myInput = 1;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('label should have class primary', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('label[data-id="myInput"]').className).toContain('border-primary text-primary');
  });

  it('label should have class danger', () => {
    component = fixture.componentInstance;
    component.myInput = 0;
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('label[data-id="myInput"]').className).toContain('border-danger text-danger');
  });

});
