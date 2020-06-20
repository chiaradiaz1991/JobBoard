import React from 'react';
import Typography from '@material-ui/core/Typography';
import './Job.css';


export default function Job ({job}) {
  return (
    <div className="job">
      <div>{job.title}</div>
      <div>{job.company}</div>
    </div>
  )
}