import React from 'react';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { searchVideo } from '../actions';
import Categories from './Categories';
import Carousel from './Carousel';
import CarouselItem from './CarouselItem';
import '../assets/styles/components/Search.scss';

const maintitletext = '¿Que quieres ver hoy?';
const maininputplaceholder = 'Buscar...';

const Search = props => {
  const { isHome, search, isSearch } = props;
  const hasSearch = Object.keys(search).length > 0;

  const handleInput = event => {
    props.searchVideo(event.target.value);
  };

  const inputStyle = classNames('input', {
    isHome,
  });

  const searchStyle = classNames('categories', {
    isSearch,
  });

  return (
    <section className='main'>
      <h2 className='main__title'>{maintitletext}</h2>
      <input
        type='text'
        className={inputStyle}
        placeholder={maininputplaceholder}
        onChange={handleInput}
      />
      {hasSearch ? (
        <Categories title='Resultados' className={searchStyle}>
          <Carousel>
            {search.map((item, index) => (
              <CarouselItem key={index} {...item} />
            ))}
          </Carousel>
        </Categories>
      ) : null}
    </section>
  );
};

const mapStateToProps = state => {
  return {
    search: state.search,
  };
};

const mapDispatchToProps = {
  searchVideo,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Search);
