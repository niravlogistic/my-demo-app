import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NO_ERRORS_SCHEMA } from '@angular/compiler/src/core';
import { DisplayInputComponent } from './display-input/display-input.component';
import { ShowValueOfStoreComponent } from './show-value-of-store/show-value-of-store.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './store/reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './app.effects';
import { MyEffects } from './store/effects';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        DisplayInputComponent,
        ShowValueOfStoreComponent
      ],
      imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        StoreModule.forRoot(reducers, {
          metaReducers,
          runtimeChecks: {
            strictStateImmutability: true,
            strictActionImmutability: true
          }
        }),
        !environment.production ? StoreDevtoolsModule.instrument() : [],
        StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
        EffectsModule.forRoot([AppEffects, MyEffects])
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have myInput, timer and last as 0 undefined 0`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.myInput).toEqual(0);
    expect(app.timer).toBeUndefined();
    expect(app.last).toEqual(0);
  });

  it('should render three buttons in a button tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('button[data-id="Start"]').textContent).toContain('Start');
    expect(compiled.querySelector('button[data-id="Stop"]').textContent).toContain('Stop');
    expect(compiled.querySelector('button[data-id="Reset"]').textContent).toContain('Reset');
  });

  it('should be called onClickStart', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.componentInstance;
    spyOn(component, 'onClickStart');
    const button = fixture.debugElement.nativeElement.querySelector('button[data-id="Start"]');
    button.click();

    fixture.whenStable().then(() => {
      expect(component.onClickStart).toHaveBeenCalled();
    });

  }));

  it('should be called stop', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.componentInstance;

    spyOn(component, 'stop');
    const button = fixture.debugElement.nativeElement.querySelector('button[data-id="Stop"]');
    button.click();

    fixture.whenStable().then(() => {
      expect(component.stop).toHaveBeenCalled();
    });
  }));

  it('should be called reset', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.componentInstance;

    spyOn(component, 'reset');
    const button = fixture.debugElement.nativeElement.querySelector('button[data-id="Reset"]');
    button.click();

    fixture.whenStable().then(() => {
      expect(component.reset).toHaveBeenCalled();
    });
  }));

});
