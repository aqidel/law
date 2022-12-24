import React from 'react';
import { Link } from 'react-router-dom';
import Form from '../Form';
import legal500_2020 from '../../../img/home/awards/legal500-firm2020.webp';
import legal500_rl_2020 from '../../../img/home/awards/legal500-recomended-lawyer-2020.webp';
import step_lawyer from '../../../img/home/awards/step-lawyer.webp';
import ciarb from '../../../img/home/awards/ciarb.webp';

export default function Main() {
  return (
    <main>
      <div id='home-bg-outer'>
        <div id='home-bg-inner'>
          <p>Наши адвокаты на Кипре помогут вам с переездом, недвижимостью, бизнесом и другими вопросами быстро и качественно.</p>
          <Link to='/contact'>Бесплатная консультация</Link>
        </div>
      </div>
      <div id='home-about-wrap'>
        <div id='home-headline-wrap'>
          <p>
            Профессиональные русскоговорящие юристы в Лимасоле окажут вам помощь с иммиграцией на Кипр,
            налоговым резидентством, созданием компании, а также покупкой недвижимости.
          </p>
        </div>
        <p id='home-maintext'>
          Переехать на Кипр и создать свою компанию на Кипре можно легко и без стресса. 
          Позвольте нам предоставить вам все необходимое, включая иммиграционные правила и разрешения на Кипр, 
          помочь вам безопасно купить недвижимость на Кипре, создать свою компанию и быстро и без проблем получить налоговое резидентство Кипра.
        </p>
        <div id='awards-wrap'>
          <figure className='award'>
            <img src={legal500_2020} alt='img'/>
          </figure>
          <figure className='award'>
            <img src={legal500_rl_2020} alt='img'/>
          </figure>
          <figure className='award'>
            <img src={step_lawyer} alt='img'/>
          </figure>
          <figure className='award'>
            <img src={ciarb} alt='img'/>
          </figure>
        </div>
        <div id='home-contact-wrap'>
          <h2>Свяжитесь с нами сегодня</h2>
          <p>Задайте свой вопрос и наш юрист свяжется с вами.</p>
          <Form/>
        </div>
      </div>
    </main>
  );
}