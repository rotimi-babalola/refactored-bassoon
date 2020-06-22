import { AppActions, IAppState } from './types';

export const initialState: IAppState = {
  files: [],
};

export function appReducer(
  state = initialState,
  action: AppActions,
): IAppState {
  switch (action.type) {
    default:
      return state;
  }
}
