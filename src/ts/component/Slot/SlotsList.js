import * as React from 'react';

import SingleSlot from './SingleSlot';

const slots = [{
  name: 'we developer nened',
  description: 'we need a good frontend developer with the best skills',
  date: '1 sebetember',
  slots: [
    {
     id: '0',
     startTime: '8am',
     endTime: '9am'
    },
    {
      id: '1',
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
     id: '0',
     startTime: '8am',
     endTime: '9am'
    },
    {
      id: '1',
      startTime: '11am',
      endTime: '2pm'
    },
    {
      id: '2',
      startTime: '2pm',
      endTime: '4pm'
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
