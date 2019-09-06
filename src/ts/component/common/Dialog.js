import * as React from 'react';

import { Dialog, DialogTitle, Container} from '@material-ui/core/';

const CommonDialog = (props) => {

  const isSmallScreen = () => typeof document !== "undefined" ? document.body.clientWidth < 600: false;
  const [fullScreen, setFullScreen] = React.useState(isSmallScreen);

  React.useEffect(() => {
    function checkScreenSize() {
      setFullScreen(isSmallScreen());
    }

    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  });

  return (
    <Dialog
      maxWidth={props.maxWidth}
      fullWidth={true}
      className="dialog"
      fullScreen={fullScreen}
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
