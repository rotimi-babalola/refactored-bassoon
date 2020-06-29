import React from 'react';
import { Provider } from 'react-redux';
import { Typography } from '@material-ui/core';
import { SnackbarProvider } from 'notistack';
import Upload from './components/Upload';
import { store } from './store/index';

const App: React.FC<{}> = () => (
  <div style={{ margin: '0 auto', width: '50%' }}>
    <Provider store={store}>
      <SnackbarProvider
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        maxSnack={3}
      >
        <Typography variant="h3">Upload to S3</Typography>
        <Upload />
      </SnackbarProvider>
    </Provider>
  </div>
);

export default App;
