import {
  ADD_FILES,
  AppActions,
  IFile,
  UPLOAD_ERROR,
  UPLOAD_START,
  UPLOAD_SUCCESS,
} from './types';

export function addFiles(files: IFile[]): AppActions {
  return {
    type: ADD_FILES,
    payload: {
      files,
    },
  };
}

export function uploadStart(tempId: string): AppActions {
  return {
    type: UPLOAD_START,
    payload: { tempId },
  };
}

export function uploadSuccess(tempId: string): AppActions {
  return {
    type: UPLOAD_SUCCESS,
    payload: { tempId },
  };
}

export function uploadError(tempId: string): AppActions {
  return {
    type: UPLOAD_ERROR,
    payload: { tempId },
  };
}
