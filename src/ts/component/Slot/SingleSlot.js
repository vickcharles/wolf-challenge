import * as React from 'react';

import { Typography } from '@material-ui/core/';

const SingleSlot = (props) => {
  return (
    <div>
			<Typography>{props.name}</Typography>
    </div>
  )
}

export default SingleSlot;
