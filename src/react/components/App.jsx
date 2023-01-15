import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Header';
import Main from './pages/Main';
import Footer from './Footer';
import Practice from './pages/Practice';
import Property from './pages/Property';
import ProbateWills from './pages/ProbateWills';
import Corporate from './pages/Corporate';
import Litigation from './pages/Litigation';
import Immigration from './pages/Immigration';
import About from './pages/About';
import SocialResponsibility from './pages/SocialResponsibility';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import '../../scss/style.scss';

export default function App() {
  return (
    <React.Fragment>
      <Header/>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/practice' element={<Practice/>}/>
        <Route path='/property' element={<Property/>}/>
        <Route path='/probate-wills' element={<ProbateWills/>}/>
        <Route path='/corporate' element={<Corporate/>}/>
        <Route path='/litigation' element={<Litigation/>}/>
        <Route path='/immigration' element={<Immigration/>} />
        <Route path='/about' element={<About/>}/>
        <Route path='/social-responsibility' element={<SocialResponsibility/>}/>
        <Route path='/careers' element={<Careers/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      <Footer/>
    </React.Fragment>
  );
}