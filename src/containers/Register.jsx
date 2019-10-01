import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Register.scss';

const Register = () => {
  const [form, setValues] = useState({
    email: '',
    name: '',
    password: ''
  });

  const handleInput = event => {
    setValues({
      ...form,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log(form);
  };

  return (
    <section className='register'>
      <section className='register__container'>
        <h2>Regístrate</h2>
        <form className='register__container--form' onSubmit={handleSubmit}>
          <input
            name='name'
            className='register__input'
            type='text'
            placeholder='Nombre'
            onChange={handleInput}
          />
          <input
            name='email'
            className='register__input'
            type='text'
            placeholder='Correo'
            onChange={handleInput}
          />
          <input
            name='password'
            className='register__input'
            type='password'
            placeholder='Contraseña'
            onChange={handleInput}
          />
          <button className='button'>Registrarme</button>
        </form>
        <Link to='/login'>Iniciar sesión</Link>
      </section>
    </section>
  );
};

export default Register;
