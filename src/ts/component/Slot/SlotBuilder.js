import * as React from 'react';

import {
	TextField,
	Grid,
	Typography,
	Button,
	Divider,
	IconButton
} from '@material-ui/core/';

import moment from 'moment';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import DeleteIcon from '@material-ui/icons/Delete';
import '../../../assets/scss/SlotBuilder.scss';

import db from '../../../firestoreConfig.js';

class SlotBuilder extends React.Component {
	constructor() {
		super();
		this.state = {
			name: '',
			description: '',
			title: '',
			date: Date.now(),
			startTime: Date.now(),
			endTime: Date.now(),
			slots: []
		}
	}

	handleChange = (e) => {
    const target = e.currentTarget;
    const value = target.value;
    const name = target.name;

    this.setState({
      ...this.state,
      [name]: value
    });
	}

	handleDeleteSlot(slotId) {
    this.setState({
      slots: this.state.slots.filter(slot =>
        slot.id !== slotId
      )
    });
	};

	handleAddSlot = () => {
		const slotToAdd = {
			id: this.state.slots.length.toString(),
			startTime: this.state.startTime,
      endTime:  this.state.endTime
		}

		if(this.state.startTime && this.state.endTime) {
			this.setState({...this.state, slots: [...this.state.slots, slotToAdd ]})
		}
	}

	handleChangeDate = (date) => {
		this.setState({
      ...this.state,
      date
    });
	}

	handleChangeStartTime = (date) => {
		this.setState({
      ...this.state,
      startTime: date
    });
	}

	handleChangeEndTime = (date) => {
		this.setState({
      ...this.state,
      endTime: date
    });
	}

	handleSubmit = () => {
		const jobToSave = {
			title: this.state.title,
			description: this.state.description,
			name: this.state.title,
			date: this.state.date,
			slots: this.state.slots
		}

		db.collection("jobs").add(jobToSave)
		.then(() => {
			console.log('added new job')
		})
		.catch(() => {
			console.log('there is an error')
		})
	}

	render() {
		const ExampleCustomInput = ({ value, onClick }) => (
			<button className="custom-input" onClick={onClick}>
				{value}
			</button>
		);


    return (
			<Grid container={true} spacing={7}>
			  <Grid item={true} xs={6}>
			  	<label>Nombre</label>
			    <TextField
						id="outlined-name"
						fullWidth
						margin="normal"
						onChange={this.handleChange}
						name="name"
						value={this.state.name}
            variant="filled"
          />
				</Grid>
				<Grid item={true} xs={12}>
			  	<label>Title</label>
			    <TextField
						id="outlined-name"
						fullWidth
						value={this.state.title}
						name="title"
						onChange={this.handleChange}
						margin="normal"
						placeholder="ej: web developer needed"
            variant="filled"
          />
				</Grid>
				<Grid item={true} xs={12}>
			  	<label>Description</label>
			    <TextField
						id="outlined-name"
						fullWidth
						onChange={this.handleChange}
						value={this.state.description}
						margin="normal"
						name="description"
            variant="filled"
          />
				</Grid>
				<Grid item={true} xs={12}>
			  	<label className="display-inherit">Date</label>
			    <DatePicker
						fullWidth={true}
						selected={this.state.date}
						onChange={this.handleChangeDate}
						name="date"
					  peekNextMonth={true}
					  showMonthDropdown={true}
					  showYearDropdown={true}
						dropdownMode="select"
						customInput={<ExampleCustomInput />}
					/>
				</Grid>
	       <Grid item={true} xs={12}>
				    <Typography className="color-primary">
				      ADD OR REMOVE SLOTS
			      </Typography>
			      <div className="margin-top-xsmall">
			        <Divider className="background-color-grey"/>
			      </div>
						<div>
							<ul>
						    {
								  this.state.slots.map((item, key) => (
								  	<li key={key} className="margin-top-xsmall display-flex">
										  <Typography className="align-self-center">
											  - {moment(item.startTime).format('h:mm:ss a').toString()}  - {moment(item.endTime).format('h:mm:ss a').toString()} 
									  	</Typography>
											<IconButton edge="end" onClick={() => this.handleDeleteSlot(item.id)} aria-label="delete" color="primary">
                        <DeleteIcon />
                      </IconButton>
									  </li>
								  ))
							  }
							</ul>
						</div>
						<div className="display-flex margin-top-small">
						  <div className="margin-right-xsmall">
							  <label className="display-inherit">Start Time</label>
						    <DatePicker
                  selected={this.state.startTime}
                  showTimeSelect
									showTimeSelectOnly
									placeholderText="Select Start Time"
                  timeIntervals={15}
									timeCaption="Time"
									onChange={this.handleChangeStartTime}
									dateFormat="h:mm aa"
									customInput={<ExampleCustomInput />}
                />
						  </div>
							<div className="margin-right-small">
							  <label className="display-inherit">End Time</label>
						    <DatePicker
                  selected={this.state.endTime}
									showTimeSelect
									showTimeSelectOnly
									placeholderText="Select End Time"
									timeIntervals={15}
									onChange={this.handleChangeEndTime}
                  timeCaption="Time"
									dateFormat="h:mm aa"
									customInput={<ExampleCustomInput />}
                />
						  </div>
							<div className="align-self-center">
							  <Button
                  variant="contained"
									color="secondary"
									onClick={this.handleAddSlot}
                  className="margin-right-xsmall margin-top-small"
                >
                  ADD TIME
                </Button>
							</div>
						</div>
				 </Grid>
				 <Grid xs={12} className="text-align-right">
				    <Button
              variant="contained"
							color="primary"
							onClick={this.handleSubmit}
              className="margin-right-xsmall margin-top-small full-width"
            >
              SUBMIT
            </Button>
				 </Grid>
			</Grid>
		);
	}
};

export default SlotBuilder;
