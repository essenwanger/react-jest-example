import React from 'react'
import { Button, Container, Grid } from '@material-ui/core'
import FirstComponent from './FirstComponent'
import LastComponent from './LastComponent'

function App() {
  return (
    <Container maxWidth="md">
      <FirstComponent/>
      <LastComponent/>
      <Grid container spacing={3}>
        <Grid item sm={12}>
          <Button variant="contained" color="primary">Hello World</Button>
        </Grid>
      </Grid>
   </Container>
  );
}

export default App;
