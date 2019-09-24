import React from 'react';
import '../assets/styles/components/Search.scss';

const maintitletext = '¿Que quieres ver hoy?';
const maininputplaceholder = 'Buscar...';

const Search = () => (
  <section className='main'>
    <h2 className='main__title'>{maintitletext}</h2>
    <input type='text' className='input' placeholder='{maininputplaceholder}' />
  </section>
);

export default Search;
