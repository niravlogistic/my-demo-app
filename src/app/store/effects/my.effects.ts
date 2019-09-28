import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import {  switchMap } from 'rxjs/operators';

import { MyActions } from '../actions';

@Injectable()
export class MyEffects {

  onChange$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MyActions.change),
      switchMap(res => [
        MyActions.increment(),
        MyActions.decrement(),
        MyActions.decrement(),
      ])
    )
  );

  constructor(
    private actions$: Actions,
  ) { }
}
