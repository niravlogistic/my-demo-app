import { createReducer, on } from '@ngrx/store';
import { change, increment, decrement, reset } from '../actions/my.actions';
import { IMyState } from 'src/app/interfaces/my-state';

export const initialState: IMyState = {
  firstVariable: -5,
  secondVariable: 10,
};

const _myReducer = createReducer(initialState,
  on(change),

  on(increment, state => ({
    ...state,
    firstVariable: state.firstVariable + 1
  })),

  on(decrement, state => ({
    ...state,
    secondVariable: state.secondVariable - 1
  })),

  on(reset, state => initialState),
);

export function myReducer(state, action) {
  return _myReducer(state, action);
}
