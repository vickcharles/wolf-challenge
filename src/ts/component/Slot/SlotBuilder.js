import * as React from 'react';

import {
	TextField,
	Grid,
	Typography,
	Divider
} from '@material-ui/core/';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

class SlotBuilder extends React.Component {
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
            variant="filled"
          />
				</Grid>
				<Grid item={true} xs={6}>
			  	<label>Apellido</label>
			    <TextField
						id="outlined-name"
						fullWidth
            margin="normal"
            variant="filled"
          />
				</Grid>
				<Grid item={true} xs={12}>
			  	<label>Title</label>
			    <TextField
						id="outlined-name"
						selected={new Date()}
						fullWidth
						margin="normal"
						placeholder="ej: web developer needed"
            variant="filled"
          />
				</Grid>
				<Grid item={true} xs={12}>
			  	<label className="display-inherit">Date</label>
			    <DatePicker
						onChange={() => {/**/}}
						fullWidth={true}
						selected={new Date()}
					  peekNextMonth={true}
					  showMonthDropdown={true}
					  showYearDropdown={true}
						dropdownMode="select"
						customInput={<ExampleCustomInput />}
					/>
				</Grid>
	       <Grid item={true} xs={12}>
				    <Typography className="color-primary">
				      ADD OR REMOVE SLOT
			      </Typography>
			      <div className="margin-top-xsmall">
			        <Divider className="background-color-grey"/>
			      </div>
				 </Grid>
			</Grid>
		);
	}
};

export default SlotBuilder;
