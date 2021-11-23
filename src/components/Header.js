import React from 'react';
import photo from '../assets/images/me-blue.png';
import Texty from 'rc-texty';
import FadeIn from 'react-fade-in';

function Header(props){
  return (
    <header className="header">
        <h1 className="header__title">
          <Texty>{props.title}</Texty>
        </h1>
        <FadeIn delay={250}>
          <h2 className="header__subtitle">{props.subtitle}</h2>
          <img className="header__img" id="photo" src={photo} alt="Karolina Guzik"/>
          <p className="header__text">{props.text}</p>
          <p className="header__arrow-down">
            <span></span>
          </p>
        </FadeIn>
    </header>
  )
}

export default Header;