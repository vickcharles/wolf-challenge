import * as React from 'react';

import {
  Typography,
  Paper,
  Grid,
  Button,
  Radio,
  FormControl,
  FormControlLabel,
  FormLabel,
  RadioGroup,
} from '@material-ui/core/';

const SingleSlot = (props) => {
  const [open, setOpen] = React.useState(false);

  const renderSelectTime = () => (
     <FormControl component="fieldset" >
        <FormLabel component="legend">Select a slot</FormLabel>
        <RadioGroup
          aria-label="gender"
          name="gender1"
        >
          <FormControlLabel value="female" control={<Radio />} label="9am - 11pm" />
          <FormControlLabel value="male" control={<Radio />} label="11pm - 2pm" />
          <FormControlLabel value="other" control={<Radio />} label="2pm - 4pm" />
        </RadioGroup>
      </FormControl>
  )

  return (
    <Paper className="margin-top-small">
      <Grid container={true} alignItems="center">
        <Grid xs={open ? 12 : 9}>
			    <Typography variant="h6">{props.slot.name}</Typography>
          <Typography className="color-grey">{props.slot.description}</Typography>
          <div className="display-flex margin-top-small">
            <Typography className="margin-right-xsmall">Date:</Typography>
            <Typography className="color-grey">{props.slot.date}</Typography>
          </div>
           {open &&
            <div className="margin-top-small">
              {renderSelectTime()}
            </div>
           }
        </Grid>
        <Grid xs={open ? 12 : 3} className="text-align-right">
          <Button onClick={() => setOpen(true)} variant="contained" color="primary">APPLY</Button>
        </Grid>
      </Grid>
    </Paper>
  )
}

export default SingleSlot;
