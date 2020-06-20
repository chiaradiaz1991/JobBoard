import React from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import './Job.css';


export default function Job({ job, onClick }) {
  return (
    <Paper className="jobContainer" onClick={onClick}>
    <div role="main">
      <Typography variant="h5">{job.title}</Typography>
      <Typography variant="h6">{job.company}</Typography>
      <Typography variant="h6">{job.location}</Typography>
      <Typography variant="h6">{job.created_at.split(' ').slice(0, 4).join(' ')}</Typography>
    </div>
    </Paper>
  )
}