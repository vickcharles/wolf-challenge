import * as React from 'react';

import { Dialog, DialogTitle, Container} from '@material-ui/core/';

const CommonDialog = (props) => {
  return (
    <Dialog
      maxWidth={props.maxWidth}
      fullWidth={true}
      className="dialog"
      open={props.open}
      scroll="body"
      onClose={props.onClose}
    >
      <DialogTitle id="alert-dialog-slide-title">{props.title}</DialogTitle>
      <Container maxWidth="lg" className="section-container">
        {props.children}
      </Container>
    </Dialog>
  );
};

export default CommonDialog;
