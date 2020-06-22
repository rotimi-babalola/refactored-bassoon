import {
  TypedUseSelectorHook,
  useSelector as useSelectorUntyped,
} from 'react-redux';
import { Action, applyMiddleware, compose, createStore } from 'redux';
import thunk, { ThunkAction } from 'redux-thunk';
import { appReducer } from './reducer';

export type RootState = ReturnType<typeof appReducer>;

export const useSelector: TypedUseSelectorHook<RootState> = useSelectorUntyped;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  null,
  Action<string>
>;

/* eslint-disable no-underscore-dangle */
const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
/* istanbul ignore next */
export const store = createStore(
  appReducer,
  /* preloadedState, */
  composeEnhancers(applyMiddleware(thunk)),
);
// eslint-enable
