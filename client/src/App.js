import React from 'react';
import './App.css';
import Jobs from './Components/Jobs/Jobs';

const mockJobs = [
  { title: 'software engineer 1', company: 'disney' },
  { title: 'software engineer 1', company: 'disney' },
  { title: 'software engineer 1', company: 'disney' },

]


function App() {
  return (
    <div className="App">
      <Jobs jobs={mockJobs} />
    </div>
  );
}

export default App;
