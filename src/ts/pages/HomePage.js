import * as React from 'react';
import SectionTitle from '../component/common/SectionTitle.js';

import { Container, Grid } from '@material-ui/core/';
import SlotsList from '../component/Slot/SlotsList';


const HomePage = () => {
  return (
    <div className="margin-top-small">
      <Container>
        <SectionTitle text="SLOTS" />
          <Grid md={5}>
            <SlotsList />
          </Grid>
      </Container>
    </div>
  )
};

export default HomePage;