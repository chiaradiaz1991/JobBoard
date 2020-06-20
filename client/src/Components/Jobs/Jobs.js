import React from 'react';
import Typography from '@material-ui/core/Typography';
import Job from '../Job/Job';
import Modal from '../Modal/Modal';
import './Jobs.css';
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

const Jobs = ({ jobs }) => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [selectedJob, setSelectedJob] = React.useState({});
  const [open, setOpen] = React.useState(false);

  const jobsLenght = jobs.length;
  const pages = Math.ceil(jobsLenght / 50);
  const jobsPerPage = jobs.slice(activeStep * 50, (activeStep * 50) + 50);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };


  console.log('job is ', jobs[0])
  return (
    <div className="jobsContainer" role="main">
      <Modal open={open} job={selectedJob} handleClose={handleClose}/>
      <Typography className="text" variant="h3" component="h2">
        Jobs for Developers Junior
      </Typography>
      <Typography className="text" variant="h5" component="h2">
        Found {jobsLenght} jobs
      </Typography>

      {
        jobsPerPage.map(job => <Job job={job} onClick={() => {
          handleClickOpen();
          setSelectedJob(job)
        }}
        />)
      }

      <Typography className="text" variant="h5" component="h2">
        Page {activeStep + 1} of {pages}
        </Typography>

      <MobileStepper
        variant="progress"
        steps={pages}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button size="small" onClick={handleNext} disabled={activeStep === 5}>
            Next
         <KeyboardArrowRight />
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            <KeyboardArrowLeft />
          Back
        </Button>
        }
      />
    </div>
  )
}

export default Jobs;