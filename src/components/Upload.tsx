import React, { useRef, useState } from 'react';
import {
  Button,
  Typography,
  createStyles,
  makeStyles,
} from '@material-ui/core';
import uploadFile from '../utils/uploadFile';

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
  const [files, setFiles] = useState<File[]>();

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    // array of object to stored dropped files
    const droppedFiles = [];
    for (let i = 0; i < evt.target.files.length; i++) {
      droppedFiles.push(evt.target.files.item(i));
    }

    setFiles(droppedFiles);
  };

  const handleUpload = () => {
    uploadFile(files);
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
            onChange={handleChange}
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
          onClick={handleUpload}
          disabled={!files}
        >
          Upload to S3
        </Button>
      </div>
      {files ? (
        files.map(file => <Typography key={file.name}>{file.name}</Typography>)
      ) : (
        <Typography>No files</Typography>
      )}
    </div>
  );
};

export default Upload;
