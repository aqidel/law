import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {

  const [state, setState] = useState(false);

  function navigationHandler() {
    if (!state) {
      document.getElementById('root').style.cssText = 'height: 100vh;overflow-y: hidden';
      setState(!state);
    } 
    else {
      document.getElementById('root').style.cssText = null;
      setState(!state);
    }
  }

  return (
    <header>
      <div id='burger-wrap' onClick={() => navigationHandler()}>
        <span className={'upper-line' + (state ? ' upper-line-active' : '')}/>
        <span className={'mid-line' + (state ? ' mid-line-active' : '')}/>
        <span className={'down-line' + (state ? ' down-line-active' : '')}/>
      </div>
      <nav className={state ? 'nav-mobile' : null}>
        <Link id='nav-to-home' to='/' onClick={() => state ? navigationHandler() : null}>
          <span>На главную</span>
        </Link>
        <div className='nav-link-wrap'>
          <Link to='/practice' onClick={() => state ? navigationHandler() : null}>
            <span>Практика</span>
          </Link>
          <input id='nav-practice-checkbox' type='checkbox'/>
          <label htmlFor='nav-practice-checkbox'>
            <svg viewBox='0 0 330 512'>
              <path d='M305.913 197.085c0 2.266-1.133 4.815-2.833 6.514L171.087 335.593c-1.7 1.7-4.249 2.832-6.515 2.832s-4.815-1.133-6.515-2.832L26.064 203.599c-1.7-1.7-2.832-4.248-2.832-6.514s1.132-4.816 2.832-6.515l14.162-14.163c1.7-1.699 3.966-2.832 6.515-2.832 2.266 0 4.815 1.133 6.515 2.832l111.316 111.317 111.316-111.317c1.7-1.699 4.249-2.832 6.515-2.832s4.815 1.133 6.515 2.832l14.162 14.163c1.7 1.7 2.833 4.249 2.833 6.515z'/>
            </svg>
          </label>
          <div className='sub-menu'>
            <Link className='nav-link-no-sub' to='/property' onClick={() => state ? navigationHandler() : null}>
              <span>Недвижимость на Кипре</span>
            </Link>
            <Link className='nav-link-no-sub' to='/probate-wills' onClick={() => state ? navigationHandler() : null}>
              <span>Наследство и завещания</span>
            </Link>
            <Link className='nav-link-no-sub' to='/immigration' onClick={() => state ? navigationHandler() : null}>
              <span>Иммиграция на Кипр</span>
            </Link>
            <Link className='nav-link-no-sub' to='/corporate' onClick={() => state ? navigationHandler() : null}>
              <span>Корпоративное право</span>
            </Link>
            <Link className='nav-link-no-sub' to='/litigation' onClick={() => state ? navigationHandler() : null}>
              <span>Судебные споры</span>
            </Link>
          </div>
        </div>
        <div className='nav-link-wrap'>
          <Link to='/about' onClick={() => state ? navigationHandler() : null}>
            <span>О нас</span>
          </Link>
          <input id='nav-about-checkbox' type='checkbox'/>
          <label htmlFor='nav-about-checkbox'>
            <svg viewBox='0 0 330 512'>
              <path d='M305.913 197.085c0 2.266-1.133 4.815-2.833 6.514L171.087 335.593c-1.7 1.7-4.249 2.832-6.515 2.832s-4.815-1.133-6.515-2.832L26.064 203.599c-1.7-1.7-2.832-4.248-2.832-6.514s1.132-4.816 2.832-6.515l14.162-14.163c1.7-1.699 3.966-2.832 6.515-2.832 2.266 0 4.815 1.133 6.515 2.832l111.316 111.317 111.316-111.317c1.7-1.699 4.249-2.832 6.515-2.832s4.815 1.133 6.515 2.832l14.162 14.163c1.7 1.7 2.833 4.249 2.833 6.515z'/>
            </svg>
          </label>
          <div className='sub-menu'>
            <Link className='nav-link-no-sub' to='/social-responsibility' onClick={() => state ? navigationHandler() : null}>
              <span>Социальная ответственность</span>
            </Link>
            <Link className='nav-link-no-sub' to='/careers' onClick={() => state ? navigationHandler() : null}>
              <span>Карьера</span>
            </Link>
          </div>
        </div>
        <Link id='nav-to-contacts' to='/contact' onClick={() => state ? navigationHandler() : null}>
          <span>Контакты</span>
        </Link>
      </nav>
    </header>
  );
}