import React from 'react';
import {Container,AppBar,Typography,Grow,grid} from '@material-ui/core'

function App() {
  return (
    <div>
      <Container maxWidth="lg">

        <AppBar position="static" color="inherit">

          <Typography variant="h2" align="center">
            Memories
          </Typography>
          <img src={memories} alt="memories" height="60" />
        </AppBar>


      </Container>

  

    </div>
  );
}

export default App;
