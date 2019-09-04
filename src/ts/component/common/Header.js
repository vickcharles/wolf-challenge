import * as React from 'react';

import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Dialog,
  DialogTitle,
  Container
} from '@material-ui/core/';

import '../../../assets/scss/Header.scss';
import SlotBuilder from '../../component/Slot/SlotBuilder';

const Header = () => {
  const [open, setOpen] = React.useState();

  return (
    <div>
      <AppBar position="static" className="app-bar">
        <Container>
          <Toolbar className="display-flex justify-content-between">
            <Typography variant="h6" >
              WOLF CHALLENGE
            </Typography>
            <div>
              <Button
                onClick={() => setOpen(true)}
                variant="contained"
                color="secondary"
                className="margin-right-xsmall"
              >
                Post a job
              </Button>
              <Button color="inherit">
                All the scheduled interviews
              </Button>
            </div>
          </Toolbar>
        </Container>
      </AppBar>
      <Dialog
        maxWidth="sm"
        fullWidth={true}
        className="dialog"
        open={open}
        scroll="body"
        onClose={() => setOpen(false)}
      >
        <DialogTitle id="alert-dialog-slide-title">CREATE A NEW SLOT</DialogTitle>
        <Container maxWidth="lg">
          <div className="margin-top-large">
            <SlotBuilder />
          </div>
        </Container>
      </Dialog>
    </div>
  );
};

export default Header;
