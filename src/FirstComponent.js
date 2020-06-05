import React from 'react'
import { Grid, TextField } from '@material-ui/core'

function FirstComponent() {
  return (
    <Grid container spacing={3}>
      <Grid item sm={6}>
        <TextField label="Filled 1" variant="filled" fullWidth/>
      </Grid>
      <Grid item sm={6}>
        <TextField label="Filled 2" variant="filled" fullWidth/>
      </Grid>
    </Grid>
  );
}

export default FirstComponent;
