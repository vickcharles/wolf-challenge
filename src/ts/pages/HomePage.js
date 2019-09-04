import * as React from 'react';
import SectionTitle from '../component/common/SectionTitle.js';

import { Container } from '@material-ui/core/';

const HomePage = () => {
  return (
    <div className="margin-top-small">
      <Container>
        <SectionTitle text="Aplications"/>
      </Container>
    </div>
  )
};

export default HomePage;