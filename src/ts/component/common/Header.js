import * as React from 'react';

import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container
} from '@material-ui/core/';

import '../../../assets/scss/Header.scss';

const Header = () => {
  return (
    <div>
      <AppBar position="static" className="app-bar">
        <Container>
          <Toolbar className="display-flex justify-content-between">
            <Typography variant="h6" >
              WOLF CHALLENGE
            </Typography>
            <div>
              <Button variant="contained" color="secondary" className="margin-right-xsmall">
                Post a job
              </Button>
              <Button color="inherit">
                All the scheduled interviews
              </Button>
            </div>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

export default Header;
