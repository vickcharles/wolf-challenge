import * as React from 'react';

import {
  Paper,
	Typography,
	Grid,
	IconButton
} from '@material-ui/core/';

import AccessTime from '@material-ui/icons/AccessTime';

const SingleInterview = () => {
  return (
    <Paper className="margin-top-small">
		  <Grid container={true}>
			  <Grid xs={12} md={7}>
					<Typography variant="h6" className="color-secondary">
            Weeb developer neeeded
          </Typography>
          <Typography className="color-grey">
					  weed need good web developer
					</Typography>
					<div className="display-flex margin-top-small">
            <Typography className="margin-right-xsmall color-secondary">Recruiter's name:</Typography>
            <Typography className="color-grey">
              Vickler Charles
            </Typography>
          </div>
					<div className="display-flex">
            <Typography className="margin-right-xsmall color-secondary">applicant's name:</Typography>
            <Typography className="color-grey">
              Osman Rodriguez
            </Typography>
          </div>
					<div className="display-flex">
            <Typography className="margin-right-xsmall color-secondary">Date of the interview:</Typography>
            <Typography className="color-grey">
              1 September 2019
            </Typography>
          </div>
				</Grid>
				<Grid xs={12} md={5}>
				  <div className="display-flex">
				    <IconButton  className="margin-right-xsmall" edge="end" aria-label="delete" color="primary">
              <AccessTime  />
            </IconButton>
            <Typography className="color-grey align-self-center">
              - From 9am to 5pm
            </Typography>
          </div>
				</Grid>
		  </Grid>
    </Paper >
  );
};

export default SingleInterview;
