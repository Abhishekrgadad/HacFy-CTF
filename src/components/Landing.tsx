import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import EventDetails from '../components/EventDetails';
import Prizes from '../components/Prizes';
import Sponsors from '../components/Sponsors';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Association from '../components/Association';
import Speakers from '../components/Speakers';


export default function Landing(){
    return(
        <>
         <div className="min-h-screen bg-black text-white">
      <Header />
      <main>
        <Hero />
        <Sponsors />
        <Association />
        <Speakers/>
        <About />
        <EventDetails />
        <Prizes />
        {/* <Sponsors /> */}
        
        <Contact />
      </main>
      <Footer />
    </div>
        </>
    )
}