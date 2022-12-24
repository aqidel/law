import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Form() {
  return (
    <form>
      <div className='input-wrap'>
        <input 
          className={'input ' + 'input-error'}
          type='text' 
          name='name' 
          placeholder='Имя *'/>
        {<small>Поле должно быть заполнено!</small>}
      </div>
      <div className='input-wrap'>
        <input 
          className={'input ' + 'input-error'}
          type='email' 
          name='email' 
          placeholder='Email *'/>
        {<small>Поле должно быть заполнено!</small>}
      </div>
      <div className='input-wrap'>
        <input 
          className={'input ' + 'input-error'}
          type='text' 
          name='phone' 
          placeholder='Телефон'/>
        {<small>Неверный формат номера!</small>}
      </div>
      <div className='textarea-wrap'>
        <textarea
          className={'textarea ' + 'textarea-error'} 
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