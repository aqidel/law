import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {

  let scrollBlocked = false;

  function scrollBlock() {
    scrollBlocked = !scrollBlocked;
    if (scrollBlocked) {
      document.getElementById('root').style.cssText = 'height: 100vh;overflow-y: hidden';
    } else {
      document.getElementById('root').style.cssText = null;
    }
  }

  return (
    <header>
      <input id='burger-checkbox' type='checkbox' onChange={() => scrollBlock()}/>
      <label htmlFor='burger-checkbox'>
        <div id='burger-wrap'>
          <span id='upper-line'/>
          <span id='mid-line'/>
          <span id='down-line'/>
        </div>
      </label>
      <nav id='menu-wrap'>
        <Link id='nav-to-home' to='/'>
          <span>На главную</span>
        </Link>
        <div className='nav-link-wrap'>
          <Link to='/practice'>
            <span>Практика</span>
          </Link>
          <input id='nav-practice-checkbox' type='checkbox'/>
          <label htmlFor='nav-practice-checkbox'>
            <svg viewBox='0 0 330 512'>
              <path d='M305.913 197.085c0 2.266-1.133 4.815-2.833 6.514L171.087 335.593c-1.7 1.7-4.249 2.832-6.515 2.832s-4.815-1.133-6.515-2.832L26.064 203.599c-1.7-1.7-2.832-4.248-2.832-6.514s1.132-4.816 2.832-6.515l14.162-14.163c1.7-1.699 3.966-2.832 6.515-2.832 2.266 0 4.815 1.133 6.515 2.832l111.316 111.317 111.316-111.317c1.7-1.699 4.249-2.832 6.515-2.832s4.815 1.133 6.515 2.832l14.162 14.163c1.7 1.7 2.833 4.249 2.833 6.515z'/>
            </svg>
          </label>
          <div className='sub-menu'>
            <Link className='nav-link-no-sub' to='/property'>
              <span>Недвижимость на Кипре</span>
            </Link>
            <Link className='nav-link-no-sub' to='/probate-wills'>
              <span>Наследство и завещания</span>
            </Link>
            <Link className='nav-link-no-sub' to='/immigration'>
              <span>Иммиграция на Кипр</span>
            </Link>
            <Link className='nav-link-no-sub' to='/corporate'>
              <span>Корпоративное право</span>
            </Link>
            <Link className='nav-link-no-sub' to='/litigation'>
              <span>Судебные споры</span>
            </Link>
          </div>
        </div>
        <div className='nav-link-wrap'>
          <Link to='/about'>
            <span>О нас</span>
          </Link>
          <input id='nav-about-checkbox' type='checkbox'/>
          <label htmlFor='nav-about-checkbox'>
            <svg viewBox='0 0 330 512'>
              <path d='M305.913 197.085c0 2.266-1.133 4.815-2.833 6.514L171.087 335.593c-1.7 1.7-4.249 2.832-6.515 2.832s-4.815-1.133-6.515-2.832L26.064 203.599c-1.7-1.7-2.832-4.248-2.832-6.514s1.132-4.816 2.832-6.515l14.162-14.163c1.7-1.699 3.966-2.832 6.515-2.832 2.266 0 4.815 1.133 6.515 2.832l111.316 111.317 111.316-111.317c1.7-1.699 4.249-2.832 6.515-2.832s4.815 1.133 6.515 2.832l14.162 14.163c1.7 1.7 2.833 4.249 2.833 6.515z'/>
            </svg>
          </label>
          <div className='sub-menu'>
            <Link className='nav-link-no-sub' to='/social-responsibility'>
              <span>Социальная ответственность</span>
            </Link>
            <Link className='nav-link-no-sub' to='/careers'>
              <span>Карьера</span>
            </Link>
          </div>
        </div>
        <Link id='nav-to-contacts' to='/contact'>
          <span>Контакты</span>
        </Link>
      </nav>
    </header>
  );
}