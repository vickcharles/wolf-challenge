import * as React from 'react';

import {
  Typography,
  Paper,
  Grid,
  Button,
  Radio,
  FormControl,
  FormControlLabel,
  TextField,
  RadioGroup,
  Divider,
} from '@material-ui/core/';

import moment from 'moment';
import db from '../../../firestoreConfig.js';

import CommonDialog from '../common/Dialog';

const SingleSlot = (props) => {
   const [name, setName] = React.useState("");
   const [open, setOpen] = React.useState(false);
   const [value, setValue] = React.useState({});

  function handleChangeRadio(event) {
    const id = event.target.value;
    console.log(id)
    const item = props.slot.slots.find((item) => item.id === id)
    console.log(item)
    setValue(item);
  }

  const handleSubmit = () => {
    const reviewToSave = {
      name: name,
      selectedSlot: value,
      job: db.doc('jobs/' + props.slot.id),
    }

    db.collection('interviews').add(reviewToSave)
    .then(() => {
      console.log('added new job')
      setOpen(false);
		})
		.catch(() => {
			console.log('there is an error')
    })
  }

  const renderSelectTime = () => (
    <Grid container={true}>
      <Grid md={6}>
        <label>What is your name?</label>
			  <TextField
					id="outlined-name"
          fullWidth
					margin="normal"
          name="name"
          value={name}
          onChange={e => setName(e.target.value)}
          variant="filled"
        />
      </Grid>
      <Grid md={12} className="margin-top-small">
         <Typography className="color-primary">
				    SELECT A SLOT
			    </Typography>
			    <div className="margin-top-xsmall">
			    <Divider className="background-color-grey"/>
			  </div>
        <FormControl component="fieldset" className="margin-top-small">
            <RadioGroup
              aria-label="gender"
              name="gender1"
              value={value.id}
              onChange={handleChangeRadio}
            >
            {
              props.slot.slots.map((item) => (
                <FormControlLabel value={item.id} control={<Radio />} label={`${moment(new Date(item.startTime)).format('h:mm:ss a').toString()} - ${moment(new Date(item.endTime)).format('h:mm:ss a').toString()}`} />
             ))
            }
          </RadioGroup>
        </FormControl>
      </Grid>
      <Grid md={12} className="margin-bottom-small margin-top-small text-align-right">
        <Button onClick={handleSubmit} variant="contained" color="primary">SCHEDULE INTERVIEW</Button>
      </Grid>
    </Grid>
  );

  return (
    <>
    <Paper className="margin-top-small">
      <Grid container={true} alignItems="center">
        <Grid item={true} xs={open ? 12 : 9}>
          <Typography variant="h6" className="color-secondary">
            {props.slot.title}
          </Typography>
          <Typography className="color-grey">{props.slot.description}</Typography>
          <div className="display-flex margin-top-small">
            <Typography className="margin-right-xsmall color-primary">interview date:</Typography>
            <Typography className="color-grey">
              {
                moment(props.slot.date).format("MMM Do YY")
              }
            </Typography>
          </div>
        </Grid>
        <Grid item={true} xs={open ? 12 : 3} className="text-align-right">
          <Button onClick={() => setOpen(true)} variant="contained" color="primary">APPLY</Button>
        </Grid>
      </Grid>
    </Paper>
    <CommonDialog
      children={<div className="margin-top-large"> {renderSelectTime()} </div>}
      open={open}
      onClose={() => setOpen(false)}
      maxWidth="sm"
      title="SCHEDULE INTERVIEW"
    />
    </>
  )
}

export default SingleSlot;
