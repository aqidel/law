import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Main from './pages/Main';
import Practice from './pages/Practice';
import Property from './pages/Property';
import ProbateWills from './pages/ProbateWills';
import Corporate from './pages/Corporate';
import Litigation from './pages/Litigation';
import Immigration from './pages/Immigration';
import About from './pages/About';
import Demidov from './pages/Demidov';
import Pavlov from './pages/Pavlov';
import Vorontsova from './pages/Vorontsova';
import SocialResponsibility from './pages/SocialResponsibility';
import Careers from './pages/Careers';
import '../../scss/style.scss';

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
        <Route path='/immigration' element={<Immigration/>} />
        <Route path='/about' element={<About/>}/>
        <Route path='/about/demidov' element={<Demidov/>}/>
        <Route path='/about/pavlov' element={<Pavlov/>}/>
        <Route path='/about/vorontsova' element={<Vorontsova/>}/>
        <Route path='/social-responsibility' element={<SocialResponsibility/>}/>
        <Route path='/careers' element={<Careers/>}/>
      </Routes>
      <footer>
        <div id='footer-content-wrap'>
          <div id='footer-contact-wrap'>
            <h3>Свяжитесь с нами для предварительной консультации</h3>
            <Link to='/contact'>Связаться с нами</Link>
          </div>
          <div id='footer-grid'>
            <div className='footer-grid-element'>
              <span>Pavlov & Demidov LLC</span>
            </div>
            <div className='footer-grid-element'>
              <div>
                <svg viewBox='0 0 512 512'>
                  <path d='M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z'/>
                </svg>
                <span>+357 27 83 22 23</span>
              </div>
              <div>
                <svg viewBox='0 0 512 512'>
                  <path d='M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z'/>
                </svg>
                <span>info@pavdemlaw.com</span>
              </div>
              <div>
                <svg viewBox='0 0 384 512'>
                  <path d='M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z'/>
                </svg>
                <span>Никосия, Кипр</span>
              </div>
            </div>
            <div className='footer-grid-element'>
              <Link to='/immigration'>
                <svg viewBox='0 0 256 512'>
                  <path d='M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z'/>
                </svg>
                <span>Иммиграция на Кипр</span>
              </Link>
              <Link to='/property'>
                <svg viewBox='0 0 256 512'>
                  <path d='M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z'/>
                </svg>
                <span>Недвижимость на Кипре</span>
              </Link>
              <Link to='/probate-wills'>
                <svg viewBox='0 0 256 512'>
                  <path d='M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z'/>
                </svg>
                <span>Наследство и завещания</span>
              </Link>
            </div>
            <div className='footer-grid-element'>
              <Link to='/litigation'>
                <svg viewBox='0 0 256 512'>
                  <path d='M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z'/>
                </svg>
                <span>Судебные споры</span>
              </Link>
              <Link to='/corporate'>
                <svg viewBox='0 0 256 512'>
                  <path d='M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z'/>
                </svg>
                <span>Корпоративное право</span>
              </Link>
              <Link to='/corporate'>
                <svg viewBox='0 0 256 512'>
                  <path d='M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z'/>
                </svg>
                <span>Трасты</span>
              </Link>
            </div>
          </div>
        </div>
        <div id='copyright'>
          © 2023 Pavlov & Demidov LLC | Created by Aqidel
        </div>
      </footer>
    </React.Fragment>
  );
}