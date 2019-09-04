import * as React from 'react';

import {
	Divider,
	Typography
} from '@material-ui/core/';

const SectionTitle = (props) => {
  return (
    <div>
			<Typography className="color-primary" variant="h5">
				{props.text}
			</Typography>
			<div className="margin-top-xsmall">
			  <Divider className="background-color-white"/>
			</div>
    </div>
  )
};

export default SectionTitle;
