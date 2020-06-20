import React from 'react';
import Typography from '@material-ui/core/Typography';
import Job from '../Job/Job';

export default function Jobs({jobs}) {
  return (
    <div className="jobContainer" role="main">
      <Typography varient="h1">
        Entry level software jobs
      </Typography>

      {
        jobs.map(job=> <Job job={job}/>)
      }
    </div>
  )
}