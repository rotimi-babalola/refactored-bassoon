import { AxiosRequestConfig } from 'axios';
import axiosClient from './axiosClient';
import { IFile } from './store/types';

export const getSignedRequestUrl = (file: IFile) =>
  axiosClient.post('/signS3', {
    fileName: file.name,
    fileType: file.blob.type,
  });

export const putFile = (
  file: IFile,
  signedRequest: string,
  config?: AxiosRequestConfig,
) =>
  axiosClient.put(signedRequest, file.blob, {
    headers: {
      'Content-Type': file.blob.type,
    },
    ...config,
  });
