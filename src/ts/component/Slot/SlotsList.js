import * as React from 'react';

import SingleSlot from './SingleSlot';
import db from '../../../firestoreConfig.js';

const SlotsList = () => {
  const [slots, setSlot] = React.useState([]);

  React.useEffect(() => {
     db.collection('jobs')
     .onSnapshot((snapshot) => {
       const jobs = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
        date: doc.data().date.toDate().toString(),
        slots: doc.data().slots.map((date) =>  ({
          ...date,
          startTime: date.startTime.toDate().toString(),
          endTime: date.endTime.toDate().toString()
        })),
       }))
       console.log(jobs);
       setSlot(jobs);
     })
  }, [])

  return (
    <>
      {
        slots.map((slot, key) => (
          <SingleSlot
            key={key}
            slot={slot}
          />
        ))
      }
    </>
  );
};

export default SlotsList;
