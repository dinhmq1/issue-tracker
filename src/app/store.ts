import {
  ActionReducerMap,
  createAction,
  createReducer,
  on,
  props,
} from '@ngrx/store';

export interface State {
  count: number;
}

export const increment = createAction('[Counter Component] Increment');
export const multiply = createAction(
  '[Counter Component] Multiply',
  props<{ multiplier: number }>()
);

export const counterReducer = createReducer(
  0,
  on(increment, (count) => count + 1),
  on(multiply, (count, { multiplier }) => count * multiplier)
);

export const reducers: ActionReducerMap<State> = {
  count: counterReducer,
};
