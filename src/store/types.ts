export enum FileStatus {
  waiting = 'waiting',
  uploading = 'uploading',
  success = 'success',
  error = 'error',
}

export interface IFile {
  blob: Blob;
  name: string;
  progress: number;
  status: FileStatus;
  tempId: string;
}

export interface IAppState {
  files: IFile[];
}

export const ADD_FILES = 'ADD_FILES';
export const UPLOAD_START = 'UPLOAD_START';
export const UPLOAD_SUCCESS = 'UPLOAD_SUCCESS';
export const UPLOAD_ERROR = 'UPLOAD_ERROR';

interface AddFilesAction {
  type: typeof ADD_FILES;
  payload: {
    files: IFile[];
  };
}

interface UploadStartAction {
  type: typeof UPLOAD_START;
  payload: {
    tempId: string;
  };
}

interface UploadSuccessAction {
  type: typeof UPLOAD_SUCCESS;
  payload: {
    tempId: string;
  };
}

interface UploadErrorAction {
  type: typeof UPLOAD_ERROR;
  payload: {
    tempId: string;
  };
}

export type AppActions =
  | AddFilesAction
  | UploadStartAction
  | UploadSuccessAction
  | UploadErrorAction;
