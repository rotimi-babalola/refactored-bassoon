import React from 'react';
import { Typography } from '@material-ui/core';
import { SnackbarProvider } from 'notistack';
import Upload from './components/Upload';

const App: React.FC<{}> = () => (
  <div style={{ margin: '0 auto', width: '50%' }}>
    <SnackbarProvider
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      maxSnack={3}
    >
      <Typography variant="h3">Upload to S3</Typography>
      <Upload />
    </SnackbarProvider>
  </div>
);

export default App;
