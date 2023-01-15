import React from 'react';
import Form from '../Form';

export default function Contact() {
  return (
    <React.Fragment>
      <div className='page-bg-wrap' id='contact-bg'>
        <div className='page-header-wrap'>
          <h1>Контакты</h1>
        </div>
      </div>
      <div className='page-content'>
        <div className='page-content-grid' id='contact-grid'>
          <div className='page-maintext'>
            <h2>Свяжитесь с нами для бесплатной консультации.</h2>
            <p>Задайте любые вопросы или запишитесь на бесплатную консультацию.</p>
            <div className='about-svg-wrap'>
              <svg viewBox='0 0 512 512'>
                <path d='M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z'/>
              </svg>
              <span>+357 27 83 22 23</span>
            </div>
            <div className='about-svg-wrap'>
              <svg viewBox='0 0 512 512'>
                <path d='M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z'/>
              </svg>
              <span>info@dempavlaw.com</span>
            </div>
          </div>
          <div className='page-form-wrap'>
            <Form/>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}