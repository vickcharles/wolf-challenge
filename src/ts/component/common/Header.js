import * as React from 'react';

import { AppBar, Toolbar, Typography, Button }  from '@material-ui/core/'; 
import '../../../assets/scss/Header.scss';

const Header = () => {
  return (
    <div >
    <AppBar position="static" className="app-bar">
      <Toolbar className="display-flex justify-content-between">
        <Typography variant="h6" >
          WOLF CHALLENGE
        </Typography>
        <Button color="inherit"></Button>
      </Toolbar>
    </AppBar>
  </div>
  )
}

export default Header;
