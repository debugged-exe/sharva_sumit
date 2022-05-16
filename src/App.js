
import './App.css';
import BrandNames from './components/BrandNames';
import Count from './components/Count';
import DonationCard from './components/DonationCard';
import Gallery from './components/Gallery';
import Home from './components/Home';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
    <Navbar/>
     <Home/>
     <Count/>
     <DonationCard/>
     <BrandNames/>
     <Gallery/>
    </div>
  );
}

export default App;
