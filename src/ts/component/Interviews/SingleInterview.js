import * as React from 'react';

import {
  Paper,
	Typography,
	Grid
} from '@material-ui/core/';

const SingleInterview = () => {
  return (
    <Paper className="margin-top-small">
		  <Grid container={true}>
			  <Grid>
					<Typography variant="h6" className="color-secondary">
            Weeb developer neeeded
          </Typography>
          <Typography className="color-grey">
					  weed need  agood web developer
					</Typography>
				</Grid>
		  </Grid>
    </Paper >
  );
};

export default SingleInterview;
