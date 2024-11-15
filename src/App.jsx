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
import Tools from './components/Section/Tools';  
import Dkc from './components/About/DKC/Dkc';
import PartnerCarousel from './components/About/Team/PartnerCarousel'
import Gpresence from './components/About/Gpresence/Gpresence';
import Industry from './components/About/Industry/industryFocus';
import Mission from './components/About/Mission/Mission';
import OwnerPortfolio from './components/About/OwnerPortfolio/OwnerPortfolio';  
import ContactForm from './components/ECommerce/Forms/contactForm';
//import Infobusiness from './components/Ecommerce/Forms/venderInfo';
import TaxForm from './components/ECommerce/Forms/taxForm';
import Form1 from './components/forms/Form1';
import Form2 from './components/forms/Form2';
import Form3 from './components/forms/Form3';
import Form4 from './components/forms/Form4';
//import VendorForm from './components/Ecommerce/Forms/VendorForm';


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
          <Route path='/contactForm' element={<ContactForm/> } />
          {/* <Route path='/infobusiness' element={<Infobusiness />} /> */}
          <Route path='/taxform' element={<TaxForm />} />
          {/* <Route path='/VendorForm' element={<VendorForm />} /> */}
          <Route path='/brand' element={<Brand />} />
          <Route path='/dkc' element={<Dkc />} />
          <Route path='/gpresence' element={<Gpresence />} />
          <Route path='/industry' element={<Industry />} />
          <Route path='/mission' element={<Mission />} />
          <Route path='/ownerportfolio' element={<OwnerPortfolio />} />
          <Route path='/partner' element={<PartnerCarousel/>}/>
          <Route path='/section' element={<Section />} />
          <Route path='/reg-partner' element={<RegPatner />} />
          <Route path='/tools' element={<Tools />} />
          <Route path='/brick-mortar' element={<Ecommerce />} />
          <Route path='/import-export' element={<Ecommerce />} />
          <Route path='/consignment' element={<Ecommerce />} />
          <Route path='/exhibition' element={<About />} />
          <Route path="/form1" element={<Form1 />} />
          <Route path="/form2" element={<Form2 />} />
          <Route path="/form3" element={<Form3 />} />
          <Route path="/form4" element={<Form4 />} />
          <Route path='/franchise' element={<Projects />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
