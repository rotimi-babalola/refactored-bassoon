import React, { useRef } from 'react';
import {
  Button,
  Typography,
  createStyles,
  makeStyles,
} from '@material-ui/core';
import { v4 as uuid } from 'uuid';
import { useDispatch } from 'react-redux';
import { addFiles } from '../store/actions';
import { FileStatus } from '../store/types';
import { useSelector } from '../store/index';

const useStyles = makeStyles(() =>
  createStyles({
    buttonContainer: {
      marginBottom: '40px',
    },
  }),
);

const Upload = () => {
  const classes = useStyles();
  const inputRef = useRef(null);
  const dispatch = useDispatch();
  const { files } = useSelector(state => state);

  const handleOnChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
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

  return (
    <div style={{ marginTop: '20px' }}>
      <div className={classes.buttonContainer}>
        <label htmlFor="contained-button-file">
          <input
            type="file"
            accept="image/*,.pdf"
            id="contained-button-file"
            style={{ display: 'none' }}
            multiple
            ref={inputRef}
            onChange={handleOnChange}
          />
          <Button
            variant="contained"
            color="primary"
            component="span"
            style={{ marginRight: '20px' }}
          >
            Select Files
          </Button>
        </label>
        <Button
          variant="contained"
          color="primary"
          component="span"
          onClick={() => {}}
          disabled={files.length === 0}
        >
          Upload to S3
        </Button>
      </div>
      {files ? (
        files.map(file => (
          <Typography
            key={file.tempId}
            style={{ maxWidth: '200px' }}
            noWrap
            title={file.name}
          >
            {file.name}
          </Typography>
        ))
      ) : (
        <Typography>No files</Typography>
      )}
    </div>
  );
};

export default Upload;
