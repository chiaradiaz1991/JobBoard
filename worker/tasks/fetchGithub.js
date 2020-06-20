
let fetch = require('node-fetch');
let URL = 'https://jobs.github.com/positions.json';


async function fetchGithub () {

  let resultCount = 1;
  let onPage = 0;

  const allJobs = [];

  while (resultCount > 0) {
    const res = await fetch(`${URL}?page=${onPage}`);
    const jobs = await res.json();
    allJobs.push(...jobs) //dump the array into another array
    resultCount = jobs.length;
    console.log(resultCount, 'resultCount')
    // console.log(jobs)
    // console.log(jobs.length) -> 50
    onPage++;
  }
}

fetchGithub();

module.export = fetchGithub;