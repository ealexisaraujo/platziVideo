import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import gravatar from '../utils/gravatar';
import { logoutRequest } from '../actions';
import '../assets/styles/components/Header.scss';

import logo from '../assets/static/logo-platzi-video-BW2.png';
import userIcon from '../assets/static/user-icon.png';

const Header = props => {
  const { user } = props;

  const handleLogout = () => {
    props.logoutRequest({});
  };

  return (
    <header className='header'>
      <Link to='/'>
        <img className='header__img' src={logo} alt='Platzi Video' />
      </Link>
      <div className='header__menu'>
        <div className='header__menu--profile'>
          <img
            src={Object.keys(user).length > 0 ? gravatar(user.email) : userIcon}
            alt={user.email}
          />
          <p>Perfil</p>
        </div>
        <ul>
          {Object.keys(user).length > 0 ? (
            <li>
              <a href='/'>{user.name}</a>
            </li>
          ) : null}

          {Object.keys(user).length > 0 ? (
            <li>
              <a href='#logout' onClick={handleLogout}>
                Cerrar Sesion
              </a>
            </li>
          ) : (
            <li>
              <Link to='/login'>Iniciar Sesión</Link>
            </li>
          )}
        </ul>
      </div>
    </header>
  );
};

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

const mapDispatchToProps = {
  logoutRequest
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
