import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Header from './components/header';
import Carousel from './components/carousel';
import Abot from './components/About';
import Item from './components/items';
// import Service from './components/service';
import Approach from './components/Approach';
import Map from './components/map';
import FAQ from './components/Faq';
import CustomPackaging from './pages/Customs'; // Import your CustomPackaging component
import StickersLabels from './pages/Stickers';
import About from './pages/About';
import Careers from './pages/Career';
import Contact from './pages/Contacts';
// import Navbar from './components/Navbar';

import Advertisingboxes from './pages/Custom/advertising-boxes'
import BathBombBoxes from './pages/Custom/BathBombBoxes'
import Boxwithwindow from './pages/Custom/boxwithwindow'
import Candleboxes from './pages/Custom/Candleboxes'
import Carddeckboxes from './pages/Custom/Carddeckboxes'
import Clothingboxes from './pages/Custom/clothingboxes'
import Dispenserboxes from './pages/Custom/Dispenserboxes'
import Giftboxes from './pages/Custom/Giftboxes'
import Hairextensionboxes from './pages/Custom/Hairextensionboxes'
import Pillowboxes from './pages/Custom/Pillowboxes'
import PRboxes from './pages/Custom/PRboxes'
import Rigidboxes from './pages/Custom/Rigidboxes'
import Shoeboxes from './pages/Custom/Shoeboxes'
import Sleeveboxes from './pages/Custom/Sleeveboxes'
import Soapboxes from './pages/Custom/Soapboxes'
import Tuckboxes from './pages/Custom/Tuckboxes'
import Gableboxes from './pages/Custom/Gableboxes'
import Mailerboxes from './pages/Custom/Mailerboxes'
import Customboxes from './pages/Custom/Customboxes'
import Cardboardboxes from './pages/Custom/Cardboardboxes'
import Hardboxes from './pages/Custom/Hardboxes'
import Medicineboxes from './pages/Custom/Medicineboxes'

import Bottlelabels from './pages/Sticker/Bottlelabels'
import Clearlabels from './pages/Sticker/Clearlabels'
import Customlabels from './pages/Sticker/Customlabels'
import Foillabels from './pages/Sticker/Foillabels'
import Holographiclabels from './pages/Sticker/Holographiclabels'
import Kisscutlabels from './pages/Sticker/Kisscutlabels'
import Metalliclabels from './pages/Sticker/Metalliclabels'
import Paperlabels from './pages/Sticker/Paperlabels'
import PElabels from './pages/Sticker/PElabels'
import PPlabels from './pages/Sticker/PPlabels'
import Securitylabels from './pages/Sticker/Securitylabels'
import Thermallabels from './pages/Sticker/Thermallabels'
import Vinyllabels from './pages/Sticker/Vinyllabels'
import Waterprooflabels from './pages/Sticker/Waterprooflabels'

import JobGraphicDesigner from './pages/jobgraphicdesigner'
import JobProductStaff from './pages/jobproductstaff'
import JobAccountant from './pages/jobaccountant'

function App() {
  return (
    <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                {/* <Navbar /> */}
                <Header />
                <Carousel />
                <Abot />
                <Item />
                {/* <Service /> */}
                <Approach />
                <Map />
                <FAQ />
              </Layout>
            }
          />
          <Route path="/custom" element={<Layout><CustomPackaging /></Layout>} />
          <Route path="/sticker" element={<Layout><StickersLabels /></Layout>} />
          <Route path="/about" element={<Layout><About /></Layout>} />
          <Route path="/career" element={<Layout><Careers /></Layout>} />
          <Route path="/contacts" element={<Layout><Contact /></Layout>} />

          <Route path="/advertising-boxes" element={<Layout><Advertisingboxes /></Layout>} />
          <Route path="/Bath-Bomb-Boxes" element={<Layout><BathBombBoxes /></Layout>} />
          <Route path="/Box-with-window" element={<Layout><Boxwithwindow /></Layout>} />
          <Route path="/Candle-Boxes" element={<Layout><Candleboxes /></Layout>} />
          <Route path="/Card-deck-boxes" element={<Layout><Carddeckboxes /></Layout>} />
          <Route path="/Clothing-boxes" element={<Layout><Clothingboxes /></Layout>} />
          <Route path="/Dispenser-boxes" element={<Layout><Dispenserboxes /></Layout>} />
          <Route path="/Gift-boxes" element={<Layout><Giftboxes /></Layout>} />
          <Route path="/Hair-extension-boxes" element={<Layout><Hairextensionboxes /></Layout>} />
          <Route path="/Pillow-Boxes" element={<Layout><Pillowboxes /></Layout>} />
          <Route path="/PR-Boxes" element={<Layout><PRboxes /></Layout>} />
          <Route path="/Rigid-Boxes" element={<Layout><Rigidboxes /></Layout>} />
          <Route path="/Shoe-Boxes" element={<Layout><Shoeboxes /></Layout>} />
          <Route path="/Sleeve-Boxes" element={<Layout><Sleeveboxes /></Layout>} />
          <Route path="/Soap-Boxes" element={<Layout><Soapboxes /></Layout>} />
          <Route path="/Tuck-Boxes" element={<Layout><Tuckboxes /></Layout>} />
          <Route path="/Gable-Boxes" element={<Layout><Gableboxes /></Layout>} />
          <Route path="/Mailer-Boxes" element={<Layout><Mailerboxes /></Layout>} />
          <Route path="/Custom-Boxes" element={<Layout><Customboxes /></Layout>} />
          <Route path="/Cardboard-Boxes" element={<Layout><Cardboardboxes /></Layout>} />
          <Route path="/Hard-Boxes" element={<Layout><Hardboxes /></Layout>} />
          <Route path="/Medicine-Boxes" element={<Layout><Medicineboxes /></Layout>} />
          
          <Route path="/Bottle-Labels" element={<Layout><Bottlelabels /></Layout>} />
          <Route path="/Clear-Labels" element={<Layout><Clearlabels /></Layout>} />
          <Route path="/Custom-Labels" element={<Layout><Customlabels /></Layout>} />
          <Route path="/Foil-Labels" element={<Layout><Foillabels /></Layout>} />
          <Route path="/Holographic-Labels" element={<Layout><Holographiclabels /></Layout>} />
          <Route path="/Kiss-cut-Labels" element={<Layout><Kisscutlabels /></Layout>} />
          <Route path="/Metallic-Labels" element={<Layout><Metalliclabels /></Layout>} />
          <Route path="/Paper-Labels" element={<Layout><Paperlabels /></Layout>} />
          <Route path="/PE-Labels" element={<Layout><PElabels /></Layout>} />
          <Route path="/PP-Labels" element={<Layout><PPlabels /></Layout>} />
          <Route path="/Security-Labels" element={<Layout><Securitylabels /></Layout>} />
          <Route path="/Thermal-Labels" element={<Layout><Thermallabels /></Layout>} />
          <Route path="/Vinyl-Labels" element={<Layout><Vinyllabels /></Layout>} />
          <Route path="/Water-Proof-Labels" element={<Layout><Waterprooflabels /></Layout>} />


          <Route path="/job-Graphic-Designer" element={<Layout><JobGraphicDesigner /></Layout>} />
          <Route path="/job-Product-Staff" element={<Layout><JobProductStaff /></Layout>} />
          <Route path="/job-Accountant" element={<Layout><JobAccountant /></Layout>} />
          
        </Routes>
    </Router>
  );
}

export default App;
