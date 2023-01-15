import React from 'react';
import Form from '../Form';
import { Link } from 'react-router-dom';
import handshake from '../../../img/corporate/handshake.webp';
import partner from '../../../img/home/lawyers/pavlov-andriy.webp';

export default function Corporate() {
  return (
    <React.Fragment>
      <div className='page-bg-wrap' id='corporate-bg'>
        <div className='page-header-wrap'>
          <h1>Корпоративное право на Кипре</h1>
        </div>
      </div>
      <div className='page-content'>
        <div className='page-content-grid'>
          <div className='page-maintext'>
            <h2>Регистрация кипрской компании без Вашего присутствия за 3 рабочих дня.</h2>
            <h3>
              Мы предоставляем услуги людям, которые хотят создать свою компанию на Кипре и сэкономить на налогах без ущерба для своего бизнеса, 
              чрезмерных затрат и юридических рисков.
            </h3>
            <p>
              Зачем тратить сотни тысяч и более на налогообложение? 
              Зарегистрируйте компанию на Кипре у экспертов по корпоративному праву за конкурентоспособную плату 
              и получите мгновенную юридическую консультацию и поддержку, когда это необходимо.
            </p>
            <p>
              При открытии Вашей компании на Кипре привлеките авторитетную юридическую фирму. 
              Избегайте неправильных советов, неправильного планирования и ошибок, которые дорого обойдутся.
            </p>
            <h3>Кипрский корпоративный налог и IP Box Кипра.</h3>
            <p>
              Воспользуйтесь кипрским корпоративным налогом, 
              который является одним из самых низких в Европе и составляет 12,5% от прибыли. 
              Для компаний в сфере высоких технологий налог может снизиться до 2,5%!
            </p>
            <p>
              Кроме того, Кипр облагает 0% налогом на прирост капитала (за исключением недвижимости) и 0% налогом на дивиденды для физических лиц, 
              не являющихся налоговыми резидентами Кипра. Кипр является идеальной юрисдикцией для людей, 
              желающих продать акции своего стартапа или разрабатываемого ими программного обеспечения (являющегося активом), 
              поскольку и дивиденды, и налог на выходе будут 0%!
            </p>
            <h3>Регистрация компании на Кипре.</h3>
            <p>
              Зарегистрируйте свою кипрскую компанию в течение 3 рабочих дней, 
              если Вы выберете название компании, для которого мы уже получили одобрение от Регистратора компаний Кипра. 
              Или получите готовую компанию, если она нужна Вам в тот же день.
            </p>
            <h3>Управление компанией и офис на Кипре.</h3>
            <p>
              Мы позаботимся обо всех Ваших административных потребностях (юридических, нормативных, бухгалтерских) 
              и предложим Вам номинального директора/директоров, акционеров, секретаря и юридический адрес на Кипре, 
              чтобы Вы могли сосредоточиться на развитии своего бизнеса, не беспокоясь о нормативных, юридических или налоговых рисках.
            </p>
            <h3>Компания на Кипре, разрешения на работу, налоги и открытие банковского счета.</h3>
            <p>
              Мы можем помочь и проконсультировать Вас по вопросам содержания компании, 
              налоговой регистрации и регистрации НДС, открытию банковского счета, вопросам трудоустройства, 
              разрешениям на работу и разрешениям на иммиграцию, чтобы Вам не пришлось беспокоиться о создании кипрской компании, 
              и у Вас было одно контактное лицо, которое контролирует все для Вас.
            </p>
            <p>
              Наслаждайтесь уверенностью в том, что ведущая юридическая фирма будет рядом с Вами на протяжении всего процесса. 
              Если Вам нужен обзор Ваших соглашений или структуры Вашей группы, 
              поиск решений с Вашими налоговыми консультантами за границей или помощь в налоговых вопросах, мы будем здесь для Вас.
            </p>
            <h3>Налоговые резиденты Кипра, не имеющие постоянного места жительства.</h3>
            <p>
              Для людей, переезжающих на Кипр, получение налогового резидента Кипра без постоянного места жительства означает, 
              что их дивиденды не будут облагаться налогом, поскольку Кипр не облагает налогом дивиденды. 
              Единственным сбором будет уплата взносов на общее медицинское страхование (2,65% при максимальной сумме 180 000 евро = 4 770 евро).
            </p>
            <h4>Мы помогаем людям, переезжающим на Кипр, быстро и без стресса стать налоговыми резидентами Кипра без постоянного места жительства.</h4>
            <h3>
              Если Вам нужна помощь с регистрацией компании на Кипре, 
              налогами или налоговым резидентством на Кипре без постоянного места жительства, 
              свяжитесь с нами для бесплатной консультации.
            </h3>
            <img src={handshake} alt='img'/>
            <h2>Кипрские международные трасты.</h2>
            <h3>Кипрские международные трасты помогут Вам защитить Ваше с трудом заработанное богатство и Ваших близких.</h3>
            <p>
              Для состоятельных людей и людей, занятых в профессиях с высоким уровнем риска, 
              становится все более важным защищать свое богатство. 
              Нападки со стороны налоговых органов, бывших супругов и недовольных кредиторов грозят лишить Вас денег.
            </p>
            <p>
              Трасты традиционно использовались для защиты от этих рисков путем передачи имущества на Кипре или за границей, 
              денежных средств и других активов в доверительное управление.
            </p>
            <h3>Обеспечьте улучшенную защиту активов с кипрскими международными трастами.</h3>
            <p>
              Кипрские международные трасты представляют собой дополнение к законодательству об обычных трастах 
              с расширенными функциями защиты активов для обеспечения безопасности. 
              Однако даже кипрские международные трасты могут быть уязвимы, если они не будут тщательно составлены.
            </p>
            <p>
              Мы можем помочь Вам создать надлежащий кипрский международный траст с высочайшим уровнем защиты активов, 
              чтобы защитить Ваше богатство и передать его нужным Вам людям.
            </p>
            <p>
              Мы поможем Вам в создании Ваших кипрских международных трастов или рассмотрим Ваши существующие договоренности, 
              объясним, каковы риски и как лучше всего достичь Ваших целей.
            </p>
            <p>
              Мы создадим Ваши кипрские международные трасты или внесем изменения в существующие кипрские трасты 
              и выступим в качестве Ваших доверенных лиц, если Вы пожелаете. 
              Кроме того, мы выполним все необходимые регистрации и надлежащим образом подготовим все документы, 
              необходимые для обеспечения максимальной защиты, чтобы Вы могли быть спокойны за риски, которые могут возникнуть в будущем.
            </p>
            <h3>
              Если Вам нужна помощь в создании или проверке Вашего кипрского международного траста, 
              свяжитесь с нами для бесплатной первоначальной консультации.
            </h3>
          </div>
          <div className='page-form-wrap'>
            <Form/>
          </div>
          <div className='page-partner-grid'>
            <div className='page-avatar-wrap'>
              <img src={partner} alt='img'/>
            </div>
            <div className='quote'>
              <p>
                Covid-19, растущая инфляция и экономическая нестабильность сделали повышение качества жизни и экономию значительных денежных средств в виде налогов, 
                подлежащих уплате, более важными для благосостояния людей. Мы стремимся поддерживать частных лиц и компании, открывающие свой бизнес на Кипре, 
                чтобы сэкономить на налогах и с уверенностью смотреть в будущее.
                <br/>
                <em>Андрей Павлов - партнер.</em>
              </p>
            </div>
          </div>
          <div className='page-about-grid three-items'>
            <div className='first'>
              <h4>
                <svg viewBox='0 0 512 512'>
                  <path d='M466.5 83.7l-192-80a48.15 48.15 0 0 0-36.9 0l-192 80C27.7 91.1 16 108.6 16 128c0 198.5 114.5 335.7 221.5 380.3 11.8 4.9 25.1 4.9 36.9 0C360.1 472.6 496 349.3 496 128c0-19.4-11.7-36.9-29.5-44.3zM256.1 446.3l-.1-381 175.9 73.3c-3.3 151.4-82.1 261.1-175.8 307.7z'/>
                </svg>
                Почему мы
              </h4>
              <p>
                <svg viewBox='0 0 256 512'>
                  <path d='M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z'/>
                </svg>
                Плавный процесс - спокойствие
              </p>
              <p>
                <svg viewBox='0 0 256 512'>
                  <path d='M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z'/>
                </svg>
                Твердые расценки
              </p>
              <p>
                <svg viewBox='0 0 256 512'>
                  <path d='M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z'/>
                </svg>
                Знаете что и когда ожидать
              </p>
              <p>
                <svg viewBox='0 0 256 512'>
                  <path d='M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z'/>
                </svg>
                Поддержка шаг за шагом
              </p>
              <p>
                <svg viewBox='0 0 256 512'>
                  <path d='M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z'/>
                </svg>
                Надежный и быстрый сервис
              </p>
              <p>
                <svg viewBox='0 0 256 512'>
                  <path d='M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z'/>
                </svg>
                Конфиденциальность
              </p>
            </div>
            <div className='second'>
              <h4>
                <svg viewBox='0 0 512 512'>
                  <path d='m510.08 250.107-53.479-73.333c-1.883-2.582-4.886-4.108-8.08-4.108h-220.339l41.89-57.441c2.561-3.511 2.561-8.273 0-11.784l-53.48-73.333c-1.882-2.582-4.885-4.108-8.08-4.108h-198.512c-5.523 0-10 4.477-10 10v440c0 5.523 4.477 10 10 10h348.517c3.194 0 6.197-1.526 8.08-4.108l53.479-73.334c2.56-3.511 2.56-8.273 0-11.784l-41.89-57.441h70.334c3.195 0 6.197-1.526 8.08-4.108l53.479-73.333c2.56-3.511 2.56-8.274.001-11.785zm-490.08-204.108h183.428l46.187 63.333-46.187 63.333h-183.428zm423.437 273.334h-203.434c-5.523 0-10 4.477-10 10s4.477 10 10 10h113.431l46.186 63.333-46.187 63.334h-333.433v-126.667h130.002c5.523 0 10-4.477 10-10s-4.477-10-10-10h-130.002v-126.667h423.437l46.186 63.333z'/>
                  <path d='m85.002 367.666c-19.299 0-35 15.701-35 35s15.701 35 35 35 35-15.701 35-35-15.701-35-35-35zm0 50c-8.271 0-15-6.729-15-15s6.729-15 15-15 15 6.729 15 15-6.729 15-15 15z'/>
                  <path d='m324.501 412.667h-174.498c-5.523 0-10 4.477-10 10s4.477 10 10 10h174.499c5.522 0 10-4.477 10-10s-4.478-10-10.001-10z'/>
                  <path d='m140.003 382.665c0 5.523 4.477 10 10 10h174.499c5.522 0 10-4.477 10-10s-4.478-10-10-10h-174.499c-5.523 0-10 4.477-10 10z'/>
                  <path d='m85.002 220.999c-19.299 0-35 15.701-35 35s15.701 35 35 35 35-15.701 35-35-15.701-35-35-35zm0 50c-8.271 0-15-6.729-15-15s6.729-15 15-15 15 6.729 15 15-6.729 15-15 15z'/>
                  <path d='m411.997 266h-261.994c-5.523 0-10 4.477-10 10s4.477 10 10 10h261.994c5.522 0 10-4.477 10-10s-4.478-10-10-10z'/>
                  <path d='m411.997 225.999h-261.994c-5.523 0-10 4.477-10 10s4.477 10 10 10h261.994c5.522 0 10-4.477 10-10s-4.478-10-10-10z'/>
                  <path d='m85.002 144.333c19.299 0 35-15.701 35-35s-15.701-35-35-35-35 15.701-35 35 15.701 35 35 35zm0-50.001c8.271 0 15 6.729 15 15s-6.729 15-15 15-15-6.729-15-15 6.729-15 15-15z'/>
                  <path d='m150.003 139.334h36.499c5.523 0 10-4.477 10-10s-4.477-10-10-10h-36.499c-5.523 0-10 4.477-10 10s4.477 10 10 10z'/>
                  <path d='m150.003 99.332h36.499c5.523 0 10-4.477 10-10s-4.477-10-10-10h-36.499c-5.523 0-10 4.477-10 10s4.477 10 10 10z'/>
                  <path d='m205.006 329.333c0-5.523-4.477-10-10-10h-.007c-5.523 0-9.996 4.477-9.996 10s4.48 10 10.003 10 10-4.477 10-10z'/>
                </svg>
                Как это работает
              </h4>
              <p>
                <svg viewBox='0 0 256 512'>
                  <path d='M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z'/>
                </svg>
                Обратная связь
              </p>
              <p>
                <svg viewBox='0 0 256 512'>
                  <path d='M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z'/>
                </svg>
                Консультация
              </p>
              <p>
                <svg viewBox='0 0 256 512'>
                  <path d='M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z'/>
                </svg>
                Поддержка шаг за шагом
              </p>
              <p>
                <svg viewBox='0 0 256 512'>
                  <path d='M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z'/>
                </svg>
                Быстрый результат
              </p>
            </div>
            <div className='third'>
              <h4>
                <svg viewBox='0 0 512 512'>
                  <path d='m81.828 161.712c14.073 0 27.314-3.621 38.851-9.97h321.406c39.087 0 70.886-31.799 70.886-70.886s-31.799-70.886-70.886-70.886h-151.972c-4.143 0-7.5 3.358-7.5 7.5s3.357 7.5 7.5 7.5h151.972c30.815 0 55.886 25.071 55.886 55.887 0 30.815-25.07 55.886-55.886 55.886h-301.88c13.57-14.236 21.434-32.579 22.378-51.896 1.093-21.821-6.72-43.475-22.379-59.877h114.909c4.143 0 7.5-3.358 7.5-7.5s-3.357-7.5-7.5-7.5h-134.434c-11.538-6.349-24.778-9.97-38.851-9.97-44.584 0-80.855 36.272-80.855 80.856s36.271 80.856 80.855 80.856zm0-146.712c36.444 0 65.856 29.732 65.856 65.856 0 35.824-29.105 65.856-65.856 65.856-36.313 0-65.855-29.543-65.855-65.856s29.543-65.856 65.855-65.856z'/>
                  <path d='m81.828 513.943c14.073 0 27.313-3.621 38.85-9.97h321.406c39.087 0 70.886-31.799 70.886-70.886s-31.799-70.887-70.886-70.887h-321.406c-11.537-6.349-24.777-9.97-38.85-9.97-44.584 0-80.855 36.272-80.855 80.856 0 44.585 36.271 80.857 80.855 80.857zm360.257-136.742c30.815 0 55.886 25.071 55.886 55.887s-25.07 55.886-55.886 55.886h-301.881c14.418-15.101 22.48-35.003 22.48-55.886 0-20.789-7.988-40.698-22.479-55.887zm-360.257-9.97c36.61 0 65.856 29.89 65.856 65.856 0 36.3-29.551 65.856-65.856 65.856-36.313 0-65.855-29.543-65.855-65.856s29.543-65.856 65.855-65.856z'/>
                  <path d='m75.149 63.906v45.756c0 4.142 3.357 7.5 7.5 7.5s7.5-3.358 7.5-7.5v-57.612c0-2.582-1.328-4.982-3.516-6.354-2.188-1.373-4.928-1.522-7.251-.397l-9.654 4.671c-3.729 1.804-5.289 6.289-3.484 10.018 1.627 3.364 5.438 4.966 8.905 3.918z'/>
                  <path d='m409.075 280.872c-2.059 2.176-2.625 5.369-1.44 8.12s3.894 4.534 6.889 4.534h35.183c4.143 0 7.5-3.358 7.5-7.5s-3.357-7.5-7.5-7.5h-17.765l15.277-16.152c.043-.045.085-.09.126-.136 5.21-5.788 7.76-12.902 7.179-20.033-.54-6.643-3.755-12.638-9.052-16.883-5.32-4.261-12.089-5.823-19.058-4.396-7.809 1.599-14.726 6.767-18.503 13.826-1.955 3.652-.579 8.197 3.073 10.151 3.653 1.955 8.196.578 10.151-3.073 1.673-3.125 4.849-5.505 8.287-6.209 1.784-.366 4.393-.417 6.67 1.407 2.071 1.66 3.275 3.871 3.48 6.393.24 2.951-.938 6.044-3.321 8.718z'/>
                  <path d='m87.378 454.641h-15.008c-4.143 0-7.5 3.358-7.5 7.5s3.357 7.5 7.5 7.5h15.008c12.146 0 22.027-9.881 22.027-22.027 0-5.561-2.071-10.646-5.482-14.527 3.411-3.88 5.482-8.967 5.482-14.527 0-12.146-9.882-22.027-22.027-22.027h-15.008c-4.143 0-7.5 3.358-7.5 7.5s3.357 7.5 7.5 7.5h15.008c3.875 0 7.027 3.152 7.027 7.027s-3.152 7.027-7.027 7.027h-15.008c-4.143 0-7.5 3.358-7.5 7.5s3.357 7.5 7.5 7.5h15.008c3.875 0 7.027 3.152 7.027 7.027s-3.152 7.027-7.027 7.027z'/>
                  <path d='m71.858 327.858h321.407c11.537 6.348 24.777 9.969 38.85 9.969 37.357 0 69.647-25.319 78.523-61.572.984-4.023-1.479-8.083-5.502-9.068-4.018-.986-8.082 1.478-9.068 5.501-7.228 29.521-33.526 50.14-63.953 50.14-36.377 0-65.856-29.65-65.856-65.856 0-35.925 29.208-65.856 65.856-65.856 30.427 0 56.726 20.618 63.953 50.14.985 4.023 5.048 6.491 9.068 5.501 4.023-.985 6.486-5.045 5.502-9.068-8.876-36.253-41.166-61.572-78.523-61.572-14.073 0-27.313 3.621-38.85 9.969h-321.407c-39.087 0-70.886 31.8-70.886 70.887.001 39.086 31.799 70.885 70.886 70.885zm0-126.773h301.881c-15.423 16.16-23.489 37.712-22.379 59.878.92 18.842 8.501 37.354 22.379 51.896h-301.881c-30.815 0-55.886-25.071-55.886-55.887s25.071-55.887 55.886-55.887z'/>
                  <path d='m197.126 411.533h91.475c4.143 0 7.5-3.358 7.5-7.5s-3.357-7.5-7.5-7.5h-91.475c-4.143 0-7.5 3.358-7.5 7.5s3.357 7.5 7.5 7.5z'/>
                  <path d='m197.126 440.972h198.083c4.143 0 7.5-3.358 7.5-7.5s-3.357-7.5-7.5-7.5h-198.083c-4.143 0-7.5 3.358-7.5 7.5s3.357 7.5 7.5 7.5z'/>
                  <path d='m197.126 470.412h198.083c4.143 0 7.5-3.358 7.5-7.5s-3.357-7.5-7.5-7.5h-198.083c-4.143 0-7.5 3.358-7.5 7.5s3.357 7.5 7.5 7.5z'/>
                  <path d='m288.601 43.532h-91.475c-4.143 0-7.5 3.358-7.5 7.5s3.357 7.5 7.5 7.5h91.475c4.143 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5z'/>
                  <path d='m395.209 72.971h-198.083c-4.143 0-7.5 3.358-7.5 7.5s3.357 7.5 7.5 7.5h198.083c4.143 0 7.5-3.358 7.5-7.5s-3.357-7.5-7.5-7.5z'/>
                  <path d='m395.209 102.41h-198.083c-4.143 0-7.5 3.358-7.5 7.5s3.357 7.5 7.5 7.5h198.083c4.143 0 7.5-3.358 7.5-7.5s-3.357-7.5-7.5-7.5z'/>
                  <path d='m102.799 235.033h91.475c4.143 0 7.5-3.358 7.5-7.5s-3.357-7.5-7.5-7.5h-91.475c-4.143 0-7.5 3.358-7.5 7.5s3.357 7.5 7.5 7.5z'/>
                  <path d='m102.799 264.472h198.083c4.143 0 7.5-3.358 7.5-7.5s-3.357-7.5-7.5-7.5h-198.083c-4.143 0-7.5 3.358-7.5 7.5s3.357 7.5 7.5 7.5z'/>
                  <path d='m102.799 293.911h198.083c4.143 0 7.5-3.358 7.5-7.5s-3.357-7.5-7.5-7.5h-198.083c-4.143 0-7.5 3.358-7.5 7.5s3.357 7.5 7.5 7.5z'/>
                </svg>
                Процедура
              </h4>
              <p>
                <svg viewBox='0 0 256 512'>
                  <path d='M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z'/>
                </svg>
                Выберите название фирмы
              </p>
              <p>
                <svg viewBox='0 0 256 512'>
                  <path d='M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z'/>
                </svg>
                Определите сферу деятельности
              </p>
              <p>
                <svg viewBox='0 0 256 512'>
                  <path d='M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z'/>
                </svg>
                Выберите органы управления
              </p>
              <p>
                <svg viewBox='0 0 256 512'>
                  <path d='M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z'/>
                </svg>
                Регистрация имени в 3-4 дня
              </p>
              <p>
                <svg viewBox='0 0 256 512'>
                  <path d='M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z'/>
                </svg>
                Еще 3-4 дня на регистрацию фирмы
              </p>
            </div>
          </div>
          <div className='contact-us'>
            <h2>Свяжитесь с нами для детальной консультации.</h2>
            <Link to='/contact'>Связаться с нами</Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}