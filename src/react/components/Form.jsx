import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { settings } from '../../../settings/settings';

export default function Form() {
  const {YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, YOUR_PUBLIC_KEY} = settings;

  const form = useRef();

  const [name_state, setNameState] = useState(0);
  const [email_state, setEmailState] = useState(0);
  const [phone_state, setPhoneState] = useState(0);
  const [message_state, setMessageState] = useState(0);

  function validation(e) {}

  function sendEmail() {
    emailjs.sendForm(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, form.current, YOUR_PUBLIC_KEY);
  };

  return (
    <form ref={form} onSubmit={validation}>
      <div className='input-wrap-outer'>
        <div className={name_state == -1 ? 'input-wrap-inner-error' : name_state == 1 ? 'input-wrap-inner-active' : 'input-wrap-inner'}>
          <input 
            className='input'
            type='text' 
            name='name' 
            placeholder='Имя *'
            onFocus={(e) => setNameState(1)}
            onBlur={(e) => setNameState(-1)}/>
        </div>
        {<small>Поле должно быть заполнено!</small>}
      </div>
      <div className='input-wrap-outer'>
        <div className={email_state == -1 ? 'input-wrap-inner-error' : email_state == 1 ? 'input-wrap-inner-active' : 'input-wrap-inner'}>
          <input 
            className='input'
            type='email' 
            name='email' 
            placeholder='Email *'
            onFocus={(e) => setEmailState(1)}
            onBlur={(e) => setEmailState(-1)}/>
        </div>
        {<small>Поле должно быть заполнено!</small>}
      </div>
      <div className='input-wrap-outer'>
        <div className={phone_state == -1 ? 'input-wrap-inner-error' : phone_state == 1 ? 'input-wrap-inner-active' : 'input-wrap-inner'}>
          <input 
            className='input'
            type='text' 
            name='phone' 
            placeholder='Телефон'
            onFocus={(e) => setPhoneState(1)}/>
        </div>
        {<small>Неверный формат номера!</small>}
      </div>
      <div className='textarea-wrap'>
        <textarea
          className={message_state == -1 ? 'textarea-error' : message_state == 1 ? 'textarea-active' : 'textarea'} 
          name='message' 
          placeholder='Сообщение *'
          onFocus={(e) => setMessageState(1)}
          onBlur={(e) => setMessageState(-1)}/>
        {<small>Поле должно быть заполнено!</small>}
        <span>0 / 180</span>
      </div>
      <input 
        id='submit-btn' 
        type='submit' 
        value={'Отправить'}/>
    </form>
  );
}