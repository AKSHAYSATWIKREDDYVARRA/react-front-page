import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import HomeCards from "./Components/HomeCards";
import JobListing from "./Components/JobListing";
const App = () =>
{
  return(
    <>
    <Navbar />
    <Hero  title='BECOME AN REACT DEV'  subtitle='You can find the job which can suite your skill set' />
    <HomeCards />
    <JobListing />

  
  

  
 

  <section className="m-auto max-w-lg my-10 px-6">
    <a
      href="jobs.html"
      className="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
      >View All Jobs</a
    >
  </section>
  </>
  );
};
export default App;