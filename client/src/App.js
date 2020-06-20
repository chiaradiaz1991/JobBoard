import React, { useEffect, useState } from 'react';
import './App.css';
import Jobs from './Components/Jobs/Jobs';
import fetch from 'node-fetch';

const JOB_API = 'http://localhost:3001/jobs';

async function fetchJobs(updateData) {
  const res = await fetch(JOB_API);
  let resJson = await res.json();
  console.log({resJson})
  updateData(resJson);
}



function App() {

  const [jobList, setUpdateJobs ] = React.useState([]);

  React.useEffect(() => {
    fetchJobs(setUpdateJobs);
  }, [])

  return (
    <div className="App">
      <Jobs jobs={jobList} />
    </div>
  );
}

export default App;

