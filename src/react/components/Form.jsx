import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { settings } from '../../../settings/settings';

export default function Form() {
  const {YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, YOUR_PUBLIC_KEY} = settings;

  const form = useRef();

  const initialInput = {
    input: '',
    class: 'input-wrap-default',
    error: ''
  };

  const initialTextarea = {
    input: '',
    class: 'textarea',
    error: ''
  };

  const [name_state, setNameState] = useState(initialInput);
  const [email_state, setEmailState] = useState(initialInput);
  const [phone_state, setPhoneState] = useState(initialInput);
  const [message_state, setMessageState] = useState(initialTextarea);

  function validate_name(e) {
    e.preventDefault();

    if (e.target.value == '') {
      if (name_state.class == 'input-wrap-active') {
        setNameState({...name_state, class: 'input-wrap-blue-to-red', error: 'Пустое поле!'});
      } else {
        setNameState({...name_state, class: 'input-wrap-error', error: 'Пустое поле!'});
      }
    } else if (e.target.value.length > 50) {
      setNameState({...name_state, class: 'input-wrap-error', error: 'Больше 50 символов!'});
    } else {
      setNameState({...name_state, class: 'input-wrap-red-to-blue', input: e.target.value, error: ''});
    }
  }

  /*function validate_email(e) {
    e.preventDefault();

    if (e.target[0].value == '') {
      setEmailState({...input, status: -1});
    } else if (e.target[0].value.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g) == null) {
      setEmailState({...input, status: -2});
    } else {
      setEmailState({...input, status: 0});
      e.target.reset();
    }
  }

  function validate_phone(e) {
    e.preventDefault();

    if (e.target[0].value != '' && e.target[0].value.match(/^\+\d+$/g) == null) {
      setPhoneState({...input, status: -2});
    } else {
      setPhoneState({...input, status: 0});
      e.target.reset();
    }
  }

  function validate_message(e) {
    e.preventDefault();

    if (e.target[0].value == '') {
      setMessageState({...input, status: -1});
    } else if (e.target[0].value.length > 180) {
      setMessageState({...input, status: -2});
    } else {
      setMessageState({...input, status: 0});
      e.target.reset();
    }
  }*/

  function sendEmail() {
    emailjs.sendForm(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, form.current, YOUR_PUBLIC_KEY);
    //e.target.reset();
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <div className='input-wrap-outer'>
        <div className={name_state.class}>
          <input 
            className='input'
            type='text' 
            name='name' 
            placeholder='Имя *'
            value={name_state.input}
            onMouseEnter={(e) => name_state.class != 'input-wrap-error' ? setNameState({...name_state, class: 'input-wrap-active'}) : null}
            onMouseLeave={(e) => name_state.class != 'input-wrap-error' && name_state.class != 'input-wrap-active' ? setNameState({...name_state, class: 'input-wrap-to-default'}) : null}
            onFocus={(e) => name_state.class != 'input-wrap-error' && name_state.class != 'input-wrap-active' && name_state.class != 'input-wrap-blue-to-red' ? setNameState({...name_state, class: 'input-wrap-active'}) : null}
            onBlur={(e) => validate_name(e)}
            onChange={(e) => validate_name(e)}/>
        </div>
        <small>{name_state.error}</small>
      </div>
      <div className='input-wrap-outer'>
        <div className={email_state.class}>
          <input 
            className='input'
            type='email' 
            name='email' 
            placeholder='Email *'/>
        </div>
        {<small>Поле должно быть заполнено!</small>}
      </div>
      <div className='input-wrap-outer'>
        <div className={phone_state.class}>
          <input 
            className='input'
            type='text' 
            name='phone' 
            placeholder='Телефон'/>
        </div>
        {<small>Неверный формат номера!</small>}
      </div>
      <div className='textarea-wrap'>
        <textarea
          className={message_state.class} 
          name='message' 
          placeholder='Сообщение *'/>
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