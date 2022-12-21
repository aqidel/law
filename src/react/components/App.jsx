import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import Practice from './pages/Practice';
import Property from './pages/Property';
import ProbateWills from './pages/ProbateWills';
import Corporate from './pages/Corporate';
import Litigation from './pages/Litigation';
import About from './pages/About';
import Demidov from './pages/Demidov';
import Pavlov from './pages/Pavlov';
import Vorontsova from './pages/Vorontsova';
import SocialResponsibility from './pages/SocialResponsibility';
import Careers from './pages/Careers';
import '../../style/style.scss';

export default function App() {
  return (
    <React.Fragment>
      <header></header>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/practice' element={<Practice/>}/>
        <Route path='/property' element={<Property/>}/>
        <Route path='/probate-wills' element={<ProbateWills/>}/>
        <Route path='/corporate' element={<Corporate/>}/>
        <Route path='/litigation' element={<Litigation/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/about/demidov' element={<Demidov/>}/>
        <Route path='/about/pavlov' element={<Pavlov/>}/>
        <Route path='/about/vorontsova' element={<Vorontsova/>}/>
        <Route path='/social-responsibility' element={<SocialResponsibility/>}/>
        <Route path='/careers' element={<Careers/>}/>
      </Routes>
      <footer></footer>
    </React.Fragment>
  );
}