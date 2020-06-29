import { ADD_FILES, AppActions, IAppState } from './types';

export const initialState: IAppState = {
  files: [],
};

export function appReducer(
  state = initialState,
  action: AppActions,
): IAppState {
  switch (action.type) {
    case ADD_FILES:
      return {
        ...state,
        files: [...state.files, ...action.payload.files],
      };
    default:
      return state;
  }
}
