import * as React from 'react';
import SectionTitle from '../component/common/SectionTitle.js';

import {
 Container,
} from '@material-ui/core/';


const Interviews = () => {
  return (
    <div className="margin-top-small">
      <Container>
        <SectionTitle text="Schedule interviews" />
      </Container>
    </div>
  )
};

export default Interviews;
