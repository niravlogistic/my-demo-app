import { createAction } from '@ngrx/store';

export const change = createAction('[Counter Component] Change');
export const increment = createAction('[Counter Component] Increment');
export const decrement = createAction('[Counter Component] Decrement');
export const reset = createAction('[Counter Component] Reset');
