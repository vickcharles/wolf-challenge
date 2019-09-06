import * as React from 'react';

import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container
} from '@material-ui/core/';

import '../../../assets/scss/Header.scss';
import SlotBuilder from '../../component/Slot/SlotBuilder';
import CommonDialog from './Dialog';

import { Link } from "react-router-dom";

const Header = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <div>
      <AppBar position="static" className="app-bar">
        <Container>
          <Toolbar className="display-flex justify-content-between">
            <Link to="/">
              <Typography variant="h6" >
                WOLF CHALLENGE
              </Typography>
            </Link>
            <div className="display-flex">
              <Button
                onClick={() => setOpen(true)}
                variant="contained"
                color="secondary"
                className="margin-right-xsmall"
              >
                Post a job
              </Button>
              <Link to="/scheduled-interviews">
                <Button color="inherit" className="hide-on-mobile">
                  All the scheduled interviews
                </Button>
              </Link>
            </div>
          </Toolbar>
        </Container>
      </AppBar>
      <CommonDialog
        children={<div className="margin-top-large"> <SlotBuilder close={() => setOpen(false)} /> </div>}
        open={open}
        onClose={() => setOpen(false)}
        maxWidth="sm"
        title="CREATE A NEW JOB"
       />
    </div>
  );
};

export default Header;
