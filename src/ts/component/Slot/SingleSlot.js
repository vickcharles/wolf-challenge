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
  const [value, setValue] = React.useState({});

  function handleChange(event) {
    setValue(event.target.value);
    const id = event.target.value;
    const item = props.slot.slots.filter((item) => item.id === id )
    setValue(item);
  }

  const handleSubmit = () => {
    alert('TODO')
  }

  const renderSelectTime = () => (
    <FormControl component="fieldset" >
      <FormLabel component="legend">Select a slot</FormLabel>
        <RadioGroup
          aria-label="gender"
          name="gender1"
          value={value.id}
          onChange={handleChange}
        >
        {
          props.slot.slots.map((item) => (
            <FormControlLabel value={item.id} control={<Radio />} label={`${item.startTime} - ${item.endTime}`} />
          ))
        }
      </RadioGroup>
    </FormControl>
  );

  const renderButton = () => (open ?
    <Button onClick={handleSubmit} variant="contained" color="primary">SEND</Button>
    :
    <Button onClick={() => setOpen(true)} variant="contained" color="primary">APPLY</Button>
  );

  return (
    <Paper className="margin-top-small">
      <Grid container={true} alignItems="center">
        <Grid xs={open ? 12 : 9}>
          <Typography variant="h6" className="color-secondary">
            {props.slot.name}
          </Typography>
          <Typography className="color-grey">{props.slot.description}</Typography>
          <div className="display-flex margin-top-small">
            <Typography className="margin-right-xsmall color-secondary">Date:</Typography>
            <Typography className="color-grey">{props.slot.date}</Typography>
          </div>
            {open &&
              <div className="margin-top-small">
                {renderSelectTime()}
              </div>
            }
        </Grid>
        <Grid xs={open ? 12 : 3} className="text-align-right">
          {renderButton()}
        </Grid>
      </Grid>
    </Paper>
  )
}

export default SingleSlot;
