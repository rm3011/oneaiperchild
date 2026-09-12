import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import Content from './components/conent/Content';
import SafetySection from './components/safetysection/SafetySection';
import MissionVision from './components/missionvision/missionVision';
import CTASection from  './components/ctasection/CTASection';
import Footer from './components/footer/Footer';


function App() {
  return (
    <Router>
      <Navbar />
      <Hero />
      <Content />
      <MissionVision />
      <SafetySection />
      <CTASection />
      <Footer />
    </Router>
  );
}

export default App;