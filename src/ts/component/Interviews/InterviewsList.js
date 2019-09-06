import * as React from 'react';

import SingleInterview from './SingleInterview';

import db from '../../../firestoreConfig.js';

class InterviewsList extends React.Component {

  constructor() {
    super();
    this.state = {
      values: []
    }
  }

  componentDidMount() {
    db.collection('interviews').get()
    .then(res => {
      const interviews = [];
      res.forEach(doc => {
        let data = doc.data();
        data.id = doc.id;
        if (data.job) {
          data.job.get()
          .then(res => {
            data.job = res.data();
            interviews.push(data);
            this.setState({values: interviews})
          })
          .catch(err => console.error(err));
        } else {
          interviews.push(data);
        }
        this.setState({values: interviews})
        console.log(interviews);
      });
    })
    .catch(err => { console.error(err) });
  }

  render() {
    return (
      <>
        {
          this.state.values.map((interview, key) => (
            <SingleInterview
              interview={interview}
            />
        ))
      }
      </>
    );
  };
};

export default InterviewsList;
