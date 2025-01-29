import Hero from '../components/Hero';
import HomeCards from '../components/HomeCards';
import JobListings from '../components/JobListings';
import ViewAllJobsBtn from '../components/ViewAllJobsBtn';

const Home = () => {
  return (
    <>
     <Hero title="Become a React Dev" subtitle="Find the React job that fits your skills and needs" />
      <HomeCards />
      <JobListings isHome={true} />
      <ViewAllJobsBtn />
    </>
  )
}

export default Home
