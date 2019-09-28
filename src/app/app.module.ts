import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { FormsModule } from '@angular/forms';
import { DisplayInputComponent } from './display-input/display-input.component';
import { ShowValueOfStoreComponent } from './show-value-of-store/show-value-of-store.component';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './app.effects';
import { MyEffects } from './store/effects';
import { reducers, metaReducers } from './store/reducers';

@NgModule({
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
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([AppEffects, MyEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
