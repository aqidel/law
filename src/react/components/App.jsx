import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from './Main';
import Practice from './Practice';
import Property from './Property';
import ProbateWills from './ProbateWills';
import Corporate from './Corporate';
import Litigation from './Litigation';
import About from './About';
import Demidov from './Demidov';
import Pavlov from './Pavlov';
import Vorontsova from './Vorontsova';
import SocialResponsibility from './SocialResponsibility';
import Careers from './Careers';
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