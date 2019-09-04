import * as React from 'react';
import SectionTitle from '../component/common/SectionTitle.js';

import { Container, Grid } from '@material-ui/core/';
import SingleSlot from '../component/Slot/SingleSlot';

const HomePage = () => {
  return (
    <div className="margin-top-small">
      <Container>
        <SectionTitle text="Aplications" />
          <Grid md={5}>
            <SingleSlot
              name="hola"
              description="how are you"
            />
          </Grid>
      </Container>
    </div>
  )
};

export default HomePage;