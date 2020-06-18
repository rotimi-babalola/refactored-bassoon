import React from 'react';
import { Button } from '@material-ui/core';

const Upload = () => (
  <div style={{ marginTop: '20px' }}>
    <label htmlFor="contained-button-file">
      <input
        type="file"
        accept="image/*,.pdf"
        id="contained-button-file"
        style={{ display: 'none' }}
        multiple
      />
      <Button variant="contained" color="primary" component="span">
        Upload
      </Button>
    </label>
  </div>
);

export default Upload;
