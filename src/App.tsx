import React from 'react';
import { Typography } from '@material-ui/core';
import Upload from './components/Upload';

const App: React.FC<{}> = () => (
  <div style={{ margin: '0 auto', width: '50%' }}>
    <Typography variant="h3">Upload to S3</Typography>
    <Upload />
  </div>
);

export default App;
