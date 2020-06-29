// import { useEffect } from 'react';
import { v4 as uuid } from 'uuid';
import { useDispatch } from 'react-redux';
import { addFiles } from '../store/actions';
import { FileStatus } from '../store/types';

const useFileUpload = (evt: React.ChangeEvent<HTMLInputElement>) => {
  const dispatch = useDispatch();

  const handleEvent = () => {
    const droppedFiles = [];

    for (let i = 0; i < evt.target.files.length; i++) {
      droppedFiles.push(evt.target.files.item(i));
    }

    dispatch(
      addFiles(
        droppedFiles.map(file => ({
          blob: new Blob([file], { type: file.type }),
          progress: 0,
          name: file.name,
          tempId: uuid(),
          status: FileStatus.waiting,
        })),
      ),
    );
  };

  return handleEvent;

  // useEffect(() => {
  //   handleEvent();
  // }, []);
};

export default useFileUpload;
