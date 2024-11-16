import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Contact from './Pages/Contact/Contact';
import Ecommerce from './components/ECommerce/Ecommerce';
import '../src/Style/custom.scss';
import About from './Pages/About/About';
import Projects from './Pages/Projects/Projects';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Brand from './components/About/Brand/Brand';
import Section from './components/Section/Section';
import RegPatner from './components/Section/RegPatner';
import Tools from './components/Section/Tools';  // Changed the path for uniqueness
import Dkc from './components/About/DKC/Dkc';
import PartnerCarousel from './components/About/Team/PartnerCarousel'
import Gpresence from './components/About/Gpresence/Gpresence';
import Industry from './components/About/IndustryFocus/Industry';
import Mission from './components/About/Mission/Mission';
import OwnerPortfolio from './components/About/OwnerPortfolio/OwnerPortfolio';  
import MultiStepForm from './components/forms/MultiStepForm';


function App() {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/ecommerce' element={<Ecommerce />} />
          <Route path='/brand' element={<Brand />} />
          <Route path='/dkc' element={<Dkc />} />
          <Route Path='/gpresence' element={<Gpresence/>}/>
          <Route Path='/industry' element={<Industry/>}/>
          <Route Path='/mission' element={<Mission/>}/>
          <Route Path='/OwnerPortfolio' element={<OwnerPortfolio/>}/>
          <Route path='/partner' element={<PartnerCarousel/>}/>
          <Route path='/section' element={<Section />} />
          <Route path='/reg-partner' element={<RegPatner />} />
          <Route path='/tools' element={<Tools />} />
          <Route path='/brick-mortar' element={<Ecommerce />} />
          <Route path='/import-export' element={<Ecommerce />} />
          <Route path='/consignment' element={<Ecommerce />} />
          <Route path='/exhibition' element={<About />} />
          <Route path="/multistep" element={<MultiStepForm/>}/>
          <Route path='/franchise' element={<Projects />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
