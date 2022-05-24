
import './App.css';
import AboutUs from './components/AboutUs';
import BrandNames from './components/BrandNames';
import Count from './components/Count';
import DonationCard from './components/DonationCard';
import Footer from './components/Footer';
import Gallery2 from './components/Gallery2';
import Home from './components/Home';
import MerchantDise from './components/MerchantDise';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
    <Navbar/>
     <Home/>
     <Count/>
     <DonationCard/>
     <BrandNames/>
     <Gallery2/>
     <AboutUs/>
     <MerchantDise/>
     <Footer/>
    </div>
  );
}

export default App;
