import React from 'react';
import { Link } from 'react-router-dom';
import Stars from '../Stars';
import justice from '../../../img/practice/justice.webp';

export default function Practice() {
  return (
    <React.Fragment>
      <div className='practice-bg-wrap'>
        <div className='practice-wrap'>
          <h1>Наша практика</h1>
        </div>
      </div>
      <main>
        <div id='practice-about'>
          <div id='practice-about-maxwidth-wrap'>
            <article>
              <h2>Более 5 лет юридического опыта и наши результаты говорят сами за себя.</h2>
              <p>
                Для нас наши клиенты всегда на первом месте. 
                Мы считаем их успех своим успехом и готовы бороться ради них. 
                Мы смотрим на мир их глазами, чтобы понять их правильно, мы советуем им так же, 
                как советовали бы члену нашей семьи (без эмоциональных привязанностей, 
                которые затуманивают разум), и мы никогда не позволяем ничему и никому мешать нам. 
                Каковы бы ни были проблемы наших клиентов, каковы бы ни были потребности, мы здесь, 
                чтобы обеспечить успех.
              </p>
            </article>
            <img src={justice} alt='img'/>
          </div>
        </div>
        <div id='practice-areas'>
          <div id='practice-areas-grid'>
            <div id='practice-svg-wrap'>
              <svg viewBox='0 0 80 68'>
                <path d='M12.816 10.638a.852.852 0 01-.44-.123 5.433 5.433 0 01-1.477-1.276A4.286 4.286 0 019.67 6.223a4.322 4.322 0 014.317-4.317 4.321 4.321 0 014.316 4.24c1.887.405 5.004-.034 8.448-2.528 1.635-1.184 3.618-2.037 5.894-2.535a22.886 22.886 0 015.127-.504.855.855 0 01-.018 1.71c-2.3-.025-6.659.295-10 2.714-1.97 1.427-3.994 2.356-6.017 2.764-1.715.345-3.359.279-4.628-.188a.854.854 0 01-.549-.938 2.61 2.61 0 00-2.573-3.024 2.61 2.61 0 00-2.607 2.607c0 .697.272 1.352.765 1.845.026.026.05.053.072.082.263.34.613.642 1.04.899a.856.856 0 01-.441 1.588zM19.152 11.921c-1.261 0-2.402-.085-3.404-.255a.855.855 0 11.286-1.686c1.131.191 2.475.264 3.995.217 3.323-.104 5.737-1.383 8.072-2.62 1.565-.829 3.043-1.612 4.638-1.92a10.567 10.567 0 013.044-.12.855.855 0 01-.168 1.702 8.88 8.88 0 00-2.552.097c-1.345.26-2.65.951-4.162 1.752-2.39 1.266-5.099 2.702-8.819 2.818-.316.01-.627.015-.93.015zM14.13 46.331a14.04 14.04 0 01-9.992-4.139A14.038 14.038 0 010 32.201c0-.472.383-.855.855-.855h26.551c.472 0 .855.383.855.855a14.04 14.04 0 01-4.139 9.992 14.037 14.037 0 01-9.992 4.138zM1.739 33.056a12.326 12.326 0 003.609 7.927 12.339 12.339 0 008.782 3.638c3.318 0 6.437-1.292 8.782-3.638a12.328 12.328 0 003.609-7.927H1.739z'/>
                <path d='M26.177 33.016a.854.854 0 01-.768-.478L14.13 9.636 2.852 32.539a.854.854 0 11-1.534-.756L13.363 7.322a.855.855 0 011.534 0l12.046 24.461a.855.855 0 01-.766 1.233z'/>
                <path d='M14.13 32.964a.855.855 0 01-.855-.855V7.7a.855.855 0 011.71 0v24.409a.854.854 0 01-.855.855zM67.184 10.638a.856.856 0 01-.442-1.588c.427-.257.777-.56 1.04-.899a.938.938 0 01.072-.082 2.592 2.592 0 00.765-1.845 2.61 2.61 0 00-2.607-2.607 2.61 2.61 0 00-2.573 3.024.854.854 0 01-.549.938c-1.269.467-2.913.533-4.628.188-2.023-.407-4.047-1.337-6.017-2.764-3.341-2.419-7.699-2.739-10-2.714h-.009a.855.855 0 01-.009-1.71c1.785-.019 3.51.15 5.127.504 2.276.498 4.259 1.351 5.894 2.535 3.444 2.494 6.561 2.934 8.448 2.528a4.322 4.322 0 014.316-4.24 4.322 4.322 0 014.317 4.317 4.29 4.29 0 01-1.228 3.016c-.388.49-.885.919-1.477 1.276a.852.852 0 01-.44.123zM60.848 11.921c-.303 0-.614-.005-.931-.015-3.72-.116-6.429-1.552-8.819-2.818-1.512-.801-2.817-1.492-4.162-1.752a8.88 8.88 0 00-2.552-.097.855.855 0 01-.168-1.702 10.567 10.567 0 013.044.12c1.595.308 3.073 1.091 4.638 1.92 2.335 1.237 4.748 2.516 8.072 2.62 1.52.047 2.865-.025 3.995-.217a.855.855 0 01.286 1.686c-1.001.17-2.142.255-3.403.255zM65.869 46.331a14.04 14.04 0 01-9.992-4.139 14.037 14.037 0 01-4.139-9.992c0-.472.383-.855.855-.855h26.551c.472 0 .855.383.855.855a14.04 14.04 0 01-4.139 9.992 14.03 14.03 0 01-9.991 4.139zM53.478 33.056a12.326 12.326 0 003.609 7.927 12.339 12.339 0 008.782 3.638c3.318 0 6.437-1.292 8.782-3.638a12.328 12.328 0 003.609-7.927H53.478z'/>
                <path d='M77.916 33.016a.854.854 0 01-.768-.478L65.869 9.636 54.591 32.539a.854.854 0 11-1.534-.756L65.102 7.322a.855.855 0 011.534 0l12.046 24.461a.855.855 0 01-.766 1.233z'/>
                <path d='M65.869 32.964a.855.855 0 01-.855-.855V7.7a.855.855 0 011.71 0v24.409a.854.854 0 01-.855.855zM55.849 67.901H24.034a.855.855 0 01-.855-.855v-7.092c0-.472.383-.855.855-.855h31.815c.472 0 .855.383.855.855v7.092a.855.855 0 01-.855.855zm-30.96-1.71h30.104v-5.382H24.889v5.382z'/>
                <path d='M55.833 60.809H24.05a.855.855 0 01-.363-1.629l12.017-5.632a.859.859 0 01.363-.081h6.923c.118 0 .235.025.343.072l12.844 5.632a.856.856 0 01-.344 1.638zm-27.944-1.71h23.864l-8.943-3.921h-6.554l-8.367 3.921z'/>
                <path d='M43.29 55.146h-6.698a.855.855 0 01-.855-.855V13.986l-3.395-3.619a.855.855 0 01.624-1.44h13.95a.855.855 0 01.624 1.44l-3.395 3.619v40.305a.855.855 0 01-.855.855zm-5.842-1.71h4.987V13.648c0-.217.083-.427.231-.585l2.275-2.425h-10l2.275 2.425a.855.855 0 01.231.585v39.788z'/>
                <path d='M39.941 10.495a5.254 5.254 0 01-5.248-5.248A5.255 5.255 0 0139.941 0a5.254 5.254 0 015.248 5.248 5.253 5.253 0 01-5.248 5.247zm0-8.785a3.541 3.541 0 00-3.537 3.537 3.541 3.541 0 003.537 3.537 3.541 3.541 0 003.537-3.537 3.54 3.54 0 00-3.537-3.537z'/>
                <path d='M39.941 10.495a5.254 5.254 0 01-5.248-5.248A5.255 5.255 0 0139.941 0a5.254 5.254 0 015.248 5.248 5.253 5.253 0 01-5.248 5.247zm0-8.785a3.541 3.541 0 00-3.537 3.537 3.541 3.541 0 003.537 3.537 3.541 3.541 0 003.537-3.537 3.54 3.54 0 00-3.537-3.537zM40.287 64.321h-16.09a.855.855 0 010-1.71h16.09a.855.855 0 010 1.71zM55.68 64.321h-6.476a.855.855 0 010-1.71h6.476a.855.855 0 010 1.71z'/>
              </svg>
              <p>Сферы правовой деятельности</p>
            </div>
            <div id='practice-property' className='practice-element'>
              <div>Недвижимость на Кипре</div>
              <h4>Мы помогаем быстро и безопасно купить или продать недвижимость на Кипре.</h4>
              <p>Due diligence</p>
              <p>Подготовка соглашений</p>
              <p>Передача прав собственности</p>
              <p>Предоставление информации</p>
              <Link to='/property'>Узнать больше</Link>
            </div>
            <div id='practice-probate-wills' className='practice-element'>
              <div>Наследство и завещания</div>
              <h4>Мы помогаем людям с имуществом на Кипре или зарубежом с оформением наследства, а также с сокращением налогов.</h4>
              <p>Налоговое планирование</p>
              <p>Оформление завещания</p>
              <p>Защита имущества</p>
              <p>Создание и управление трастами</p>
              <Link to='/probate-wills'>Узнать больше</Link>
            </div>
            <div id='practice-litigation' className='practice-element'>
              <div>Судебные споры</div>
              <h4>Не только блестящее знание права, но и умение просчитывать риски.</h4>
              <p>Договоры</p>
              <p>Международное право</p>
              <p>Полное сопровождение</p>
              <p>Представительство</p>
              <Link to='/litigation'>Узнать больше</Link>
            </div>
            <div id='practice-corporate' className='practice-element'>
              <div>Корпоративное право</div>
              <h4>Кипр - прекрасное место для создания бизнеса любых масштабов.</h4>
              <p>Регистрация компании</p>
              <p>Налоговая оптимизация</p>
              <p>Корпоративные соглашения</p>
              <p>Уставной капитал</p>
              <Link to='/corporate'>Узнать больше</Link>
            </div>
          </div>
        </div>
        <div id='practice-response'>
          <div id='practice-response-flex'>
            <Stars/>
            <p>
              Обратиться к адвокатам было одной из лучших идей при создании бизнеса.
              Они обеспечили полное сопровождение всего процесса от начала и до конца.
              Я не ожидал, что кто-то еще может быть настолько вовлечен в создание моей компании на Кипре!
              <br/>
              <br/>
              <em>- Вячеслав</em>
            </p>
          </div>
        </div>
      </main>
    </React.Fragment>
  );
}