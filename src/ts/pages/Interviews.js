import * as React from 'react';
import SectionTitle from '../component/common/SectionTitle.js';

import {
 Container,
 Grid
} from '@material-ui/core/';


import InterviewsList from '../component/Interviews/InterviewsList';

const Interviews = () => {
  return (
    <div className="margin-top-small">
      <Container>
        <SectionTitle text="Schedule interviews" />
        <Grid item={true} md={6}>
          <InterviewsList />
        </Grid>
      </Container>
    </div>
  )
};

export default Interviews;
