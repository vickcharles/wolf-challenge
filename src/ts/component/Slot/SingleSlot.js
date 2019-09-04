import * as React from 'react';

import { Typography, Paper, Grid, Button } from '@material-ui/core/';

const SingleSlot = (props) => {
  return (
    <Paper className="margin-top-small">
      <Grid container={true} alignItems="center">
        <Grid xs={6}>
			    <Typography variant="h6">{props.name}</Typography>
          <Typography className="color-grey">{props.description}</Typography>
        </Grid>
        <Grid xs={6} className="text-align-right">
          <Button variant="contained" color="primary">APPLY</Button>
        </Grid>
      </Grid>
    </Paper>
  )
}

export default SingleSlot;
