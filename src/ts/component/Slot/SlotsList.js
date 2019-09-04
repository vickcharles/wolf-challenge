import * as React from 'react';

import SingleSlot from './SingleSlot';

const slots = [{
  name: 'we developer nened',
  description: 'we need a good frontend developer with the best skills',
  date: '1 sebetember',
  slots: [
    {
     startTime: '8am',
     endTime: '9am'
    },
    {
      startTime: '11am',
      endTime: '2pm'
    }
  ]
},
{
  name: 'we developer nened',
  description: 'we need a good frontend developer with the best skills',
  date: '1 sebetember',
  slots: [
    {
     startTime: '8am',
     endTime: '9am'
    },
    {
      startTime: '11am',
      endTime: '2pm'
    }
  ]
}
];

const SlotsList = () => {
  return (
    <>
      {
        slots.map((slot) => (
          <SingleSlot
            slot={slot}
          />
        ))
      }
    </>
  );
};

export default SlotsList;
