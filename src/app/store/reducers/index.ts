import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from 'src/environments/environment';
import * as  myReducer from './my.reducer';
import { IMyState } from 'src/app/interfaces/my-state';

export interface AppState {
  myState: IMyState;
}

export const reducers: ActionReducerMap<AppState> = {
  myState: myReducer.myReducer
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
