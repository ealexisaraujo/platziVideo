import React from 'react';
import classNames from 'classnames';
import '../assets/styles/components/Search.scss';

const maintitletext = '¿Que quieres ver hoy?';
const maininputplaceholder = 'Buscar...';

const Search = ({ isHome }) => {
  const inputStyle = classNames('input', {
    isHome,
  });
  return (
    <section className='main'>
      <h2 className='main__title'>{maintitletext}</h2>
      <input
        type='text'
        className={inputStyle}
        placeholder={maininputplaceholder}
      />
    </section>
  );
};

export default Search;
