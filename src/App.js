import './App.css';
import About from '../src/components/about/About';
import Home from './components/home/Home';
import Portfolio from './components/portfolio/Portfolio';
import Services from './components/services/Services';
import Sidebar from './components/sidebar/Sidebar';
import Resume from './components/resume/Resume'
import Contact from './components/contact/Contact';
import Pricing from './components/pricing/Pricing';
import Blog from './components/blog/Blog';
import Testimonials from './components/testimonials/Testimonials';



const App = () => {
  return (
    <>
      <Sidebar/>
      <main className='main'>
        <Home/>
        <About/>
        <Services/>
        <Resume/>
        <Portfolio/>
        <Pricing/>
        <Testimonials/>
        <Blog/>
        <Contact/>
      </main>
    </>
  );
}

export default App;
