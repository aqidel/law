import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { settings } from '../../../settings/settings';

export default function Form() {
  const {YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, YOUR_PUBLIC_KEY} = settings;

  const [name_state, setNameState] = useState({input: '', class: 'input-default', error: '', label: 'label-down'});
  const [email_state, setEmailState] = useState({input: '', class: 'input-default', error: '', label: 'label-down'});
  const [phone_state, setPhoneState] = useState({input: '', class: 'input-default', error: '', label: 'label-down'});
  const [message_state, setMessageState] = useState({input: '', class: 'textarea-default', length: 0, error: '', label: 'label-txt-down'});

  const form = useRef();
  
  function validate_name() {
    if (name_state.input == '') {
      setNameState({...name_state, class: 'input-error', error: 'Пустое поле!', label: 'label-down'});
      return false;
    } 
    else if (name_state.input.length > 50) {
      setNameState({...name_state, class: 'input-error', error: 'Не более 50 символов!'});
      return false;
    } 
    else {
      setNameState({...name_state, class: 'input-default', error: ''});
      return true;
    }
  }

  function validate_email() {
    if (email_state.input == '') {
      setEmailState({...email_state, class: 'input-error', error: 'Пустое поле!', label: 'label-down'});
      return false;
    } 
    else if (email_state.input.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g) == null) {
      setEmailState({...email_state, class: 'input-error', error: 'Неверный адрес почты!'});
      return false;
    } 
    else {
      setEmailState({...email_state, class: 'input-default', error: ''});
      return true;
    }
  }

  function validate_phone() {
    if (phone_state.input != '' && e.target.value.match(/^\+\d+$/g) == null) {
      setPhoneState({...phone_state, class: 'input-error', error: 'Неверный номер телефона!'});
      return false;
    } 
    else if (phone_state.input == '') {
      setPhoneState({...phone_state, class: 'input-default', error: '', label: 'label-down'});
      return true;
    }
    else {
      setPhoneState({...phone_state, class: 'input-default', error: ''});
      return true;
    }
  }

  function validate_message() {
    if (message_state.input == '') {
      setMessageState({...message_state, class: 'textarea-error', error: 'Пустое поле!', label: 'label-txt-down'});
      return false;
    } 
    else if (message_state.input.length > 180) {
      setMessageState({...message_state, class: 'textarea-error', error: 'Не более 180 символов!'});
      return false;
    } 
    else {
      setMessageState({...message_state, class: 'textarea-default', error: ''});
      return true;
    }
  }

  function sendEmail(e) {
    e.preventDefault();
    if (validate_name() && validate_email() && validate_phone() && validate_message()) {
      emailjs.sendForm(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, form.current, YOUR_PUBLIC_KEY);
    } 
    else {
      return;
    }
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <div className='input-wrap-outer'>
        <div className={name_state.class}>
          <label className={name_state.label} htmlFor='input-name'>Имя *</label>
          <input 
            id='input-name'
            className='input'
            type='text' 
            name='name' 
            placeholder={name_state.label == 'label-up' || name_state.label == 'label-up-error' ? 'Александр' : null}
            value={name_state.input}
            onMouseEnter={() => name_state.class == 'input-default' || name_state.class == 'input-hover-off' ? setNameState({...name_state, class: 'input-hover-on'}) : null}
            onMouseLeave={() => name_state.class == 'input-hover-on' ? setNameState({...name_state, class: 'input-hover-off'}) : null}
            onFocus={() => name_state.class != 'input-error' ? setNameState({...name_state, class: 'input-focus', label: 'label-up'}) : setNameState({...name_state, label: 'label-up-error'})}
            onBlur={() => validate_name()}
            onChange={(e) => setNameState({...name_state, input: e.target.value})}/>
        </div>
        <small>{name_state.error}</small>
      </div>
      <div className='input-wrap-outer'>
        <div className={email_state.class}>
          <label className={email_state.label} htmlFor='input-email'>Email *</label>
          <input 
            id='input-email'
            className='input'
            type='text' 
            name='email' 
            placeholder={email_state.label == 'label-up' || email_state.label == 'label-up-error' ? 'mymail@mail.com' : null}
            value={email_state.input}
            onMouseEnter={() => email_state.class == 'input-default' || email_state.class == 'input-hover-off' ? setEmailState({...email_state, class: 'input-hover-on'}) : null}
            onMouseLeave={() => email_state.class == 'input-hover-on' ? setEmailState({...email_state, class: 'input-hover-off'}) : null}
            onFocus={() => email_state.class != 'input-error' ? setEmailState({...email_state, class: 'input-focus', label: 'label-up'}) : setEmailState({...email_state, label: 'label-up-error'})}
            onBlur={() => validate_email()}
            onChange={(e) => setEmailState({...email_state, input: e.target.value})}/>
        </div>
        <small>{email_state.error}</small>
      </div>
      <div className='input-wrap-outer'>
        <div className={phone_state.class}>
          <label className={phone_state.label} htmlFor='input-phone'>Телефон</label>
          <input 
            id='input-phone'
            className='input'
            type='text' 
            name='phone' 
            placeholder={phone_state.label == 'label-up' || phone_state.label == 'label-up-error' ? '+7 9990000000' : null}
            value={phone_state.input}
            onMouseEnter={() => phone_state.class == 'input-default' || phone_state.class == 'input-hover-off' ? setPhoneState({...phone_state, class: 'input-hover-on'}) : null}
            onMouseLeave={() => phone_state.class == 'input-hover-on' ? setPhoneState({...phone_state, class: 'input-hover-off'}) : null}
            onFocus={() => phone_state.class != 'input-error' ? setPhoneState({...phone_state, class: 'input-focus', label: 'label-up'}) : setPhoneState({...phone_state, label: 'label-up-error'})}
            onBlur={() => validate_phone()}
            onChange={(e) => setPhoneState({...phone_state, input: e.target.value})}/>
        </div>
        <small>{phone_state.error}</small>
      </div>
      <div className='textarea-wrap'>
        <label className={message_state.label} htmlFor='textarea-message'>Сообщение *</label>
        <textarea
          id='textarea-message'
          className={message_state.class} 
          name='message' 
          placeholder={message_state.label == 'label-txt-up' || message_state.label == 'label-txt-up-error' ? 'Введите текст' : null}
          value={message_state.input}
          onMouseEnter={() => message_state.class == 'textarea-default' ? setMessageState({...message_state, class: 'textarea-hover'}) : null}
          onMouseLeave={() => message_state.class == 'textarea-hover' ? setMessageState({...message_state, class: 'textarea-default'}) : null}
          onFocus={() => message_state.class != 'textarea-error' ? setMessageState({...message_state, class: 'textarea-focus', label: 'label-txt-up'}) : setMessageState({...message_state, label: 'label-txt-up-error'})}
          onBlur={() => validate_message()}
          onChange={(e) => setMessageState({...message_state, input: e.target.value, length: e.target.value.length})}/>
        <small>{message_state.error}</small>
        <span>{message_state.length} / 180</span>
      </div>
      <input 
        id='submit-btn' 
        type='submit' 
        value={'Отправить'}/>
    </form>
  );
}