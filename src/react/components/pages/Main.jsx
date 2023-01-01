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
      <div id='areas-of-expertise-wrap'>
        <div>
          <h6>Наша сфера деятельности</h6>
          <div id='areas-of-expertise'>
            <div className='area-of-expertise'>
              <svg viewBox='0 0 512 512'>
                <path d='M506.552,317.933c-9.739-14.312-29.351-18.1-43.707-8.452l-65.34,43.728l-0.19-136.11l22.7,21.265 			c4.827,4.521,11.121,7.009,17.729,7.009c0.012,0,0.026,0,0.039,0c7.134-0.01,14.022-3,18.898-8.205 			c4.737-5.057,7.222-11.655,6.996-18.581c-0.226-6.926-3.136-13.349-8.193-18.086l-43.035-40.314 			c-2.946-2.76-7.571-2.609-10.33,0.337c-2.759,2.946-2.608,7.57,0.337,10.33l43.035,40.314c2.208,2.068,3.478,4.872,3.577,7.895 			c0.098,3.023-0.986,5.904-3.055,8.111c-2.16,2.306-5.09,3.578-8.252,3.582c-0.006,0-0.011,0-0.017,0 			c-2.883,0-5.63-1.086-7.737-3.06c-0.001-0.001-0.001-0.001-0.001-0.001L259.124,67.616c-2.816-2.637-7.198-2.633-10.007,0.014 			L78.679,228.188c-2.201,2.074-5.079,3.16-8.103,3.076c-3.024-0.09-5.831-1.353-7.905-3.556c-2.074-2.201-3.167-5.079-3.076-8.102 			c0.09-3.024,1.353-5.831,3.554-7.905L246.326,39.143c4.342-4.091,11.154-4.101,15.507-0.021L369,139.514 			c2.945,2.759,7.57,2.609,10.33-0.337c2.759-2.946,2.608-7.57-0.337-10.33L271.827,28.455c-9.973-9.344-25.576-9.323-35.523,0.049 			l-58.639,55.24l-0.016-9.853c-0.004-3.106-1.218-6.024-3.417-8.216c-2.195-2.189-5.109-3.394-8.209-3.394 			c-0.006,0-0.011,0-0.017,0l-41.947,0.059c-3.106,0.004-6.023,1.218-8.216,3.417c-2.192,2.199-3.398,5.12-3.393,8.227l0.116,71.087 			l-59.439,55.993c-5.044,4.751-7.935,11.182-8.142,18.108c-0.207,6.926,2.296,13.518,7.047,18.56 			c4.75,5.044,11.181,7.936,18.108,8.143c0.265,0.008,0.53,0.012,0.795,0.012c6.635,0,12.918-2.49,17.767-7.06l22.649-21.336 			l0.09,64.291c-7.328-1.067-14.742-1.627-22.19-1.627H76.746v-4.382c0-14.711-11.969-26.68-26.68-26.68H26.68 			C11.969,249.092,0,261.06,0,275.772V390.29c0,4.036,3.272,7.308,7.308,7.308s7.308-3.272,7.308-7.308V275.772 			c0-6.652,5.412-12.064,12.064-12.064h23.385c6.652,0,12.064,5.412,12.064,12.064v11.69v149.796v11.575 			c0,6.652-5.412,12.064-12.064,12.064H26.68c-6.652,0-12.064-5.412-12.064-12.064v-12.788c0-4.036-3.272-7.308-7.308-7.308 			S0,432.009,0,436.045v12.788c0,14.711,11.969,26.68,26.68,26.68h23.385c14.711,0,26.68-11.968,26.68-26.68v-0.993l107.024,40.528 			c0.198,0.075,0.399,0.141,0.603,0.198c4.653,1.314,9.304,1.973,13.896,1.973c2.484,0,4.951-0.193,7.393-0.579l157.281-22.672 			c0.037-0.005,0.073-0.011,0.11-0.017c13.372-2.135,25.987-7.788,36.48-16.346c0.091-0.074,0.181-0.151,0.268-0.23l101.611-91.388 			C513.244,348.802,515.453,331.015,506.552,317.933z M163.037,76.902l0.034,20.59l-35.912,33.83l-0.089-54.371L163.037,76.902z 			 M254.141,82.976l128.538,120.412l0.223,159.593l-20.691,13.848L340.3,375.6l-0.579-5.82 			c-2.039-20.498-17.171-36.987-37.18-40.922l-0.132-94.945c-0.01-7.286-5.942-13.207-13.227-13.207c-0.006,0-0.011,0-0.018,0 			l-69.654,0.098c-3.533,0.005-6.853,1.385-9.347,3.887c-2.495,2.501-3.866,5.825-3.861,9.357l0.116,82.781 			c-13.797-3.154-26.971-8.363-39.288-15.568c-1.537-0.899-3.089-1.767-4.654-2.611c-0.61-0.329-1.23-0.638-1.845-0.959 			c-0.952-0.497-1.902-0.997-2.864-1.474c-0.766-0.38-1.541-0.74-2.313-1.107c-0.819-0.389-1.637-0.782-2.462-1.157 			c-0.84-0.381-1.687-0.744-2.533-1.11c-0.773-0.334-1.546-0.67-2.324-0.991c-0.87-0.359-1.745-0.704-2.621-1.047 			c-0.777-0.304-1.555-0.606-2.336-0.898c-0.867-0.324-1.738-0.637-2.611-0.944c-0.819-0.289-1.639-0.571-2.463-0.846 			c-0.836-0.279-1.674-0.552-2.516-0.817c-0.897-0.283-1.798-0.553-2.7-0.82c-0.775-0.228-1.549-0.456-2.328-0.672 			c-1.017-0.283-2.039-0.548-3.062-0.81c-0.479-0.123-0.955-0.262-1.437-0.381l-0.113-80.878L254.141,82.976z M287.923,327.029 			l-61.125-7.037l-5.759-0.663l-0.118-83.911l66.874-0.094L287.923,327.029z M491.673,348.41l-101.511,91.298 			c-8.459,6.859-18.606,11.396-29.361,13.122l-157.213,22.662c-0.033,0.005-0.065,0.01-0.098,0.015l-0.109,0.017 			c-4.763,0.754-9.723,0.436-14.744-0.942L76.746,432.21V294.77h12.505c10.645,0,21.218,1.229,31.514,3.616 			c0.383,0.089,0.765,0.18,1.147,0.272c1.265,0.305,2.527,0.619,3.783,0.959c0.11,0.03,0.219,0.062,0.329,0.092 			c1.259,0.344,2.513,0.707,3.763,1.086c0.224,0.068,0.449,0.135,0.672,0.204c1.33,0.411,2.654,0.84,3.971,1.29 			c0.136,0.047,0.271,0.095,0.407,0.142c2.743,0.947,5.459,1.98,8.141,3.098c0.146,0.061,0.292,0.122,0.438,0.184 			c1.337,0.562,2.666,1.143,3.986,1.747c0.035,0.016,0.071,0.033,0.106,0.05c1.276,0.586,2.543,1.194,3.802,1.819 			c0.148,0.073,0.297,0.145,0.445,0.219c1.23,0.615,2.45,1.252,3.663,1.904c0.229,0.123,0.457,0.249,0.686,0.373 			c1.224,0.667,2.441,1.347,3.646,2.052c17.391,10.173,36.323,16.762,56.271,19.585c0.063,0.009,0.125,0.017,0.188,0.024 			l81.881,9.427c0.453,0.065,0.903,0.14,1.35,0.224c12.054,2.264,21.568,11.171,24.751,22.77c0.472,1.718,0.804,3.496,0.986,5.319 			l0.325,3.27l-153.46-13.445c-4.018-0.351-7.566,2.622-7.918,6.642c-0.353,4.021,2.622,7.566,6.642,7.918l162.242,14.215 			c0.039,0.003,0.077,0.002,0.115,0.005c0.038,0.003,0.075,0.009,0.114,0.012l30.597,1.717c0.137,0.008,0.273,0.011,0.409,0.011 			c0.145,0,0.288-0.023,0.432-0.032c0.163-0.01,0.326-0.016,0.488-0.036c0.218-0.028,0.431-0.075,0.645-0.122 			c0.153-0.034,0.307-0.059,0.457-0.103c0.234-0.067,0.459-0.158,0.686-0.249c0.122-0.049,0.248-0.086,0.368-0.142 			c0.341-0.158,0.673-0.34,0.989-0.552l25.972-17.381c0.001-0.001,0.002-0.002,0.003-0.003l76.702-51.332 			c7.717-5.187,18.251-3.152,23.482,4.536C499.249,333.181,498.062,342.736,491.673,348.41z'/>
              </svg>
              <p>Купля-продажа недвижимости на Кипре</p>
              <Link to='/property'>Узнать больше</Link>
            </div>
            <div className='area-of-expertise'>
              <svg viewBox='0 0 512 512'>
                <path d='m427.8125 0h-250.25c-35.390625 0-64.1875 28.792969-64.1875 64.1875v9.539062h15v-9.539062c0-27.121094 22.066406-49.1875 49.1875-49.1875h209.054688c-14.046876 11.785156-22.992188 29.460938-22.992188 49.1875v383.625c0 27.121094-22.066406 49.1875-49.1875 49.1875-27.125 0-49.1875-22.0625-49.1875-49.1875v-102.714844h-265.25v102.714844c0 35.394531 28.792969 64.1875 64.1875 64.1875h250.3125c35.363281-.035156 64.125-28.816406 64.125-64.1875v-383.625c0-27.121094 22.066406-49.1875 49.1875-49.1875 27.125 0 49.1875 22.066406 49.1875 49.1875v87.714844h-85.875v15h100.875v-102.714844c0-35.394531-28.792969-64.1875-64.1875-64.1875zm-363.625 497c-27.121094 0-49.1875-22.066406-49.1875-49.1875v-87.710938h235.25v87.710938c0 19.726562 8.945312 37.40625 23.003906 49.1875zm0 0'/>
                <path d='m23.761719 121.929688c10.933593 31.253906 31.652343 76.1875 68.238281 112.773437 21.71875 21.71875 46.371094 37.84375 69.363281 49.648437h-15.386719v15h49.003907c3.386719 1.300782 6.660156 2.496094 9.796875 3.59375 27.96875 9.785157 49.886718 13.664063 57.21875 14.785157l35.417968 35.417969 5.175782-5.175782h17.550781v-15h-21.6875l-25.847656-25.847656c-.273438-1.777344-.707031-4.40625-1.34375-7.773438h48.878906v-15h-52.132813c-2.269531-9.367187-5.464843-20.847656-9.902343-33.621093h32.984375v-15h-38.578125c-4.171875-10.449219-9.308594-21.859375-15.578125-33.617188h83.207031v-15h-91.742187c-10.335938-17.039062-23.117188-34.28125-38.820313-49.984375-36.589844-36.589844-81.523437-57.304687-112.773437-68.238281-33.8125-11.832031-58.785157-15.03125-59.832032-15.160156l-9.558594-1.191407 1.191407 9.5625c.128906 1.042969 3.324219 26.015626 15.15625 59.828126zm46.59375-39.335938v25.777344h15v-20.214844c22.164062 8.8125 46.886719 21.335938 69.957031 38.941406v54.914063h15v-42.488281c2.933594 2.640624 5.824219 5.375 8.660156 8.210937 12.75 12.75 23.519532 26.632813 32.597656 40.746094v45.992187h15v-19.707031c14.191407 28.09375 22.34375 54.867187 26.789063 73.113281l-163.835937-163.835937-10.605469 10.605469 163.859375 163.859374c-30.855469-7.492187-86.140625-25.613281-130.988282-65.730468h34.1875v-15h-49.445312c-10.085938-10.902344-18.832031-22.492188-26.402344-34.242188h19.277344v-15h-28.292969c-22.648437-40.414062-32.359375-80.140625-35.890625-98.195312 9.789063 1.90625 25.945313 5.628906 45.132813 12.253906zm0 0'/>
                <path d='m211.570312 99.339844v60.015625h11.003907l7.75-5.875 7.753906 5.875h11v-60.015625h-15v38.167968l-3.753906-2.847656-3.753907 2.847656v-38.167968zm0 0'/>
                <path d='m254.820312 99.339844h15v60.015625h-15zm0 0'/>
                <path d='m274.820312 99.339844v60.015625h37.507813v-15h-22.507813v-45.015625zm0 0'/>
                <path d='m317.328125 99.339844v60.015625h37.507813v-15h-22.507813v-45.015625zm0 0'/>
                <path d='m113.375 274.832031h15v57.765625h-15zm0 0'/>
                <path d='m232.75 385.097656h-46.925781v-15h46.925781zm-56.925781 0h-15v-15h15zm-25 0h-15v-15h15zm0 0'/>
                <path d='m352.519531 40h-51.523437v-15h51.523437zm-61.523437 0h-15v-15h15zm-25 0h-15v-15h15zm0 0'/>
              </svg>
              <p>Наследство и завещания</p>
              <Link to='/probate-wills'>Узнать больше</Link>
            </div>
            <div className='area-of-expertise'>
              <svg viewBox='0 0 512 512'>
                <path d='M440 6.5L24 246.4c-34.4 19.9-31.1 70.8 5.7 85.9L144 379.6V464c0 46.4 59.2 65.5 86.6 28.6l43.8-59.1 111.9 46.2c5.9 2.4 12.1 3.6 18.3 3.6 8.2 0 16.3-2.1 23.6-6.2 12.8-7.2 21.6-20 23.9-34.5l59.4-387.2c6.1-40.1-36.9-68.8-71.5-48.9zM192 464v-64.6l36.6 15.1L192 464zm212.6-28.7l-153.8-63.5L391 169.5c10.7-15.5-9.5-33.5-23.7-21.2L155.8 332.6 48 288 464 48l-59.4 387.3z'/>
              </svg>
              <p>Иммиграция на Кипр</p>
              <Link to='/immigration'>Узнать больше</Link>
            </div>
            <div className='area-of-expertise'>
              <svg viewBox='0 0 80 67.901'>
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
              <p>Судебные споры</p>
              <Link to='/litigation'>Узнать больше</Link>
            </div>
            <div className='area-of-expertise'>
              <svg viewBox='0 0 480 480'>
                <path d='M456,112h-88V88c-0.035-30.913-25.087-55.965-56-56H168c-30.913,0.035-55.965,25.087-56,56v24H24 			c-13.255,0-24,10.745-24,24v160c0.042,10.134,6.445,19.15,16,22.528V424c0,13.255,10.745,24,24,24h400c13.255,0,24-10.745,24-24 			V318.528c9.555-3.378,15.958-12.394,16-22.528V136C480,122.745,469.255,112,456,112z M128,88c0.026-22.08,17.92-39.974,40-40h144 			c22.08,0.026,39.974,17.92,40,40v24h-16.32L336,88c-0.026-13.244-10.756-23.974-24-24H167.704c-13.244,0.026-23.974,10.756-24,24 			v0.08L143.92,112H128V88z M320,87.888L319.68,112H159.92l-0.248-24c0-4.418,3.582-8,8-8H312C316.375,80,319.939,83.513,320,87.888 			z M448,424c0,4.418-3.582,8-8,8H40c-4.418,0-8-3.582-8-8V320h56v24c0,4.418,3.582,8,8,8h32c4.418,0,8-3.582,8-8v-24h208v24 			c0,4.418,3.582,8,8,8h32c4.418,0,8-3.582,8-8v-24h56V424z M104,336v-40c-0.004-2.157,0.885-4.219,2.456-5.696 			c1.455-1.495,3.458-2.328,5.544-2.304c4.418,0,8,3.582,8,8v16v24H104z M360,336v-40c0-4.418,3.582-8,8-8 			c2.158-0.007,4.223,0.879,5.704,2.448c1.484,1.465,2.312,3.467,2.296,5.552v16v24H360z M464,296c0,4.418-3.582,8-8,8h-64v-8 			c-0.057-13.231-10.769-23.943-24-24c-13.255,0-24,10.745-24,24v8H136v-8c0-13.255-10.745-24-24-24 			c-13.224,0.074-23.926,10.776-24,24v8H24c-4.418,0-8-3.582-8-8V136c0-4.418,3.582-8,8-8h432c4.418,0,8,3.582,8,8V296z'/>
              </svg>
              <p>Регистрация компании на Кипре</p>
              <Link to='/corporate'>Узнать больше</Link>
            </div>
            <div className='area-of-expertise'>
              <svg viewBox='0 0 64 64'>
                <path d='m49 27h-2v2c-1.654 0-3 1.346-3 3s1.346 3 3 3h2c.551 0 1 .448 1 1s-.449 1-1 1h-3v-1h-2v3h3v2h2v-2c1.654 0 3-1.346 3-3s-1.346-3-3-3h-2c-.551 0-1-.448-1-1s.449-1 1-1h3v1h2v-3h-3z'/>
                <path d='m60 55h-16c-.475 0-.919.121-1.319.319.198-.4.319-.844.319-1.319v-2c0-1.654-1.346-3-3-3h-16c-.475 0-.919.121-1.319.319.198-.4.319-.844.319-1.319v-2c0-1.654-1.346-3-3-3h-16c-1.654 0-3 1.346-3 3v2c0 .771.301 1.468.78 2-.479.532-.78 1.229-.78 2v2c0 .771.301 1.468.78 2-.479.532-.78 1.229-.78 2v2c0 1.654 1.346 3 3 3h16c.771 0 1.468-.301 2-.78.532.48 1.229.78 2 .78h16c.771 0 1.468-.301 2-.78.532.48 1.229.78 2 .78h16c1.654 0 3-1.346 3-3v-2c0-1.654-1.346-3-3-3zm-36-4h1v2h2v-2h2v2h2v-2h2v2h2v-2h2v2h2v-2h1c.551 0 1 .448 1 1v2c0 .552-.449 1-1 1h-16c-.551 0-1-.448-1-1v-2c0-.552.449-1 1-1zm-20 4c-.551 0-1-.448-1-1v-2c0-.552.449-1 1-1h1v2h2v-2h2v2h2v-2h2v2h2v-2h2v2h2v-2h1c.551 0 1 .448 1 1v2c0 .552-.449 1-1 1zm-1-9c0-.552.449-1 1-1h1v2h2v-2h2v2h2v-2h2v2h2v-2h2v2h2v-2h1c.551 0 1 .448 1 1v2c0 .552-.449 1-1 1h-16c-.551 0-1-.448-1-1zm17 15h-16c-.551 0-1-.448-1-1v-2c0-.552.449-1 1-1h1v2h2v-2h2v2h2v-2h2v2h2v-2h2v2h2v-2h1c.551 0 1 .448 1 1v2c0 .552-.449 1-1 1zm20 0h-16c-.551 0-1-.448-1-1v-2c0-.552.449-1 1-1h1v2h2v-2h2v2h2v-2h2v2h2v-2h2v2h2v-2h1c.551 0 1 .448 1 1v2c0 .552-.449 1-1 1zm21-1c0 .552-.449 1-1 1h-16c-.551 0-1-.448-1-1v-2c0-.552.449-1 1-1h1v2h2v-2h2v2h2v-2h2v2h2v-2h2v2h2v-2h1c.551 0 1 .448 1 1z'/>
                <path d='m63 15v-11h-11v2h7.586l-9.713 9.713-6.028-4.019-12.845 13.915v11.391h-14v-4-1-3h5c4.962 0 9-4.037 9-9v-1h-7c-2.826 0-5.349 1.312-7 3.356v-7.356h5c4.962 0 9-4.037 9-9v-1h-7c-2.904 0-5.484 1.389-7.131 3.53-.705-4.264-4.408-7.53-8.869-7.53h-7v1c0 4.963 4.038 9 9 9h5v3 1 11.356c-1.651-2.044-4.174-3.356-7-3.356h-7v1c0 4.963 4.038 9 9 9h5v4h-14v2h37.214c1.825 3.556 5.521 6 9.786 6s7.961-2.444 9.786-6h5.214v-2h-4.426c.271-.955.426-1.959.426-3 0-2.346-.744-4.517-2-6.305v-16.281l4-4v7.586zm-39 6h4.929c-.487 3.388-3.408 6-6.929 6h-4.929c.487-3.388 3.408-6 6.929-6zm0-14h4.929c-.487 3.388-3.408 6-6.929 6h-4.929c.487-3.388 3.408-6 6.929-6zm-14 2c-3.521 0-6.442-2.612-6.929-6h4.929c3.521 0 6.442 2.612 6.929 6zm0 22c-3.521 0-6.442-2.612-6.929-6h4.929c3.521 0 6.442 2.612 6.929 6zm38-8c-1.041 0-2.045.155-3 .426v-8.558l4 2.667v5.515c-.33-.029-.662-.05-1-.05zm-5 1.214c-1.6.821-2.973 2.019-4 3.481v-7.804l4-4.333zm-10 12.786v-10.609l4-4.333v11.942c0 1.041.155 2.045.426 3zm15 6c-4.962 0-9-4.037-9-9s4.038-9 9-9 9 4.037 9 9-4.038 9-9 9zm7-17.479c-1.158-.957-2.517-1.674-4-2.095v-6.012l4-4z'/>
              </svg>
              <p>Работа с трастами</p>
              <Link to='/corporate'>Узнать больше</Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}