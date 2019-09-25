import React from 'react';
import '../assets/styles/components/Register.scss';

const Register = () => (
  <section className='register'>
    <section className='register__container'>
      <h2>Regístrate</h2>
      <form className='register__container--form'>
        <input className='register__input' type='text' placeholder='Nombre' />
        <input className='register__input' type='text' placeholder='Correo' />
        <input
          className='register__input'
          type='password'
          placeholder='Contraseña'
        />
        <button type='button' className='button'>
          Registrarme
        </button>
      </form>
      <a href='/'>Iniciar sesión</a>
    </section>
  </section>
);

export default Register;
