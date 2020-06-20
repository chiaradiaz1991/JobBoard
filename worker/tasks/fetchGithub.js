let fetch = require('node-fetch');
let redis = require("redis");
let client = redis.createClient();

const { promisify } = require('util');
const setAsync = promisify(client.set).bind(client);

let URL = 'https://jobs.github.com/positions.json';


async function fetchGithub() {

  console.log('fetching github')
  let resultCount = 1;
  let onPage = 0;

  const allJobs = [];

  while (resultCount > 0) {
    const res = await fetch(`${URL}?page=${onPage}`);
    const jobs = await res.json();
    allJobs.push(...jobs) //dump the array into another array
    resultCount = jobs.length;
    console.log('resultcount', resultCount);
    onPage++;
  }

  console.log('got', allJobs.length, 'jobs total')


  const jrJobs = allJobs.filter(job => {
    const jobTitle = job.title.toLowerCase();

    if (jobTitle.includes('senior')
      || jobTitle.includes('manager')
      || jobTitle.includes('sr.')
      || jobTitle.includes('architect')) {
      return false
    }

    return true;
  })

  console.log('filtered down to', jrJobs.length);


  // set in redis
  const success = await setAsync('github', JSON.stringify(jrJobs));
  console.log({success});
}


module.exports = fetchGithub;