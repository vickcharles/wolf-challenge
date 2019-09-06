import * as React from 'react';

import {
  Paper,
	Typography,
	Grid,
	IconButton
} from '@material-ui/core/';

import AccessTime from '@material-ui/icons/AccessTime';
import moment from 'moment';

const SingleInterview = (props) => {
  return (
    <Paper className="margin-top-small">
		  <Grid container={true}>
			  <Grid xs={12} md={7}>
					<Typography variant="h6" className="color-secondary">
            {props.interview.job.title}
          </Typography>
          <Typography className="color-grey">
				  	{props.interview.job.description}
					</Typography>
					<div className="display-flex margin-top-small">
            <Typography className="margin-right-xsmall color-primary">Recruiter's name:</Typography>
            <Typography className="color-grey">
            {props.interview.job.name}
            </Typography>
          </div>
					<div className="display-flex">
            <Typography className="margin-right-xsmall color-primary">applicant's name:</Typography>
            <Typography className="color-grey">
						  {props.interview.name}
            </Typography>
          </div>
					<div className="display-flex">
            <Typography className="margin-right-xsmall color-primary">Date of the interview:</Typography>
            <Typography className="color-grey">
              {moment(props.interview.job.date.toDate()).format("MMM Do YY")}
            </Typography>
          </div>
				</Grid>
				<Grid xs={12} md={5}>
				  <div className="display-flex">
				    <IconButton  className="margin-right-xsmall" edge="end" aria-label="delete" color="primary">
              <AccessTime  />
            </IconButton>
            <Typography className="color-grey align-self-center">
              - From {moment(props.interview.selectedSlot.startTime).format('h:mm:ss a').toString()} to {moment(props.interview.selectedSlot.endTime).format('h:mm:ss a').toString()}
            </Typography>
          </div>
				</Grid>
		  </Grid>
    </Paper >
  );
};

export default SingleInterview;
