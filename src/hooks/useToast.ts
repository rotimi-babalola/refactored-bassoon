import { VariantType, useSnackbar } from 'notistack';

const useToast = () => {
  const { enqueueSnackbar } = useSnackbar();

  const toast = (message: string, variant: VariantType = 'default') => {
    enqueueSnackbar(message, {
      autoHideDuration: 5000,
      variant,
    });
  };

  const toastUploadSuccess = () =>
    toast('File successfully uploaded', 'success');

  const toastUploadError = () =>
    toast('Error occurred while uploading', 'error');

  return {
    toastUploadSuccess,
    toastUploadError,
  };
};

export default useToast;
