import * as React from 'react';
import SectionTitle from '../component/common/SectionTitle.js';

import { Container, Grid, Button } from '@material-ui/core/';
import SlotsList from '../component/Slot/SlotsList';
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="margin-top-small">
      <Container>
        <Grid item={true} xs={12} md={12} className="text-align-right margin-bottom-small">
          <Link to="/scheduled-interviews">
            <Button
              variant="contained"
              color="secondary"
              className="hide-on-desktop"
            >
                All the scheduled interviews
            </Button>
          </Link>
        </Grid>
        <SectionTitle text="JOBS NEAR YOU" />
          <Grid item={true} md={5}>
            <SlotsList />
          </Grid>
      </Container>
    </div>
  )
};

export default HomePage;
