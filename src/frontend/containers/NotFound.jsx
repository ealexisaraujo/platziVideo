import React from 'react';
import '../assets/styles/components/NotFound.scss';
import Header from '../components/Header';

const NotFound = () => (
  <>
    <Header isLogin />
    <section className='error'>
      <h1>404</h1>
      <p>Page not found</p>
    </section>
  </>
);

export default NotFound;
