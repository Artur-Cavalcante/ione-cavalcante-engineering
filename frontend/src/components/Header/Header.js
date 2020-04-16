import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/output.css';

import IoneCavalcanteEngenhariaLogo from './images/header/IoneCavalcanteEngineeringLogoWithBackground.svg';
import IoneCavalcanteEngenhariaLogoNameWithoutBackground from './images/header/IoneCavalcanteEngineeringLogoNameWithoutBackground.svg';

function Header() {
  const [navInicioClass, setNavInicioClass] = useState('text-sm ' )
  const [navServicosClass, setNavServicosClass] = useState('text-sm')
  const [navContatoClass, setNavContatoClass] = useState('text-sm')
  const [navSobreClass, setNavSobreClass] = useState('text-sm')


  function onHover(nav) {
    switch (nav) {
      case 'inicio':
        setNavInicioClass('text-sm border-b-3p border-primary');
        break;
      case 'servicos':
        setNavServicosClass('text-sm border-b-3p border-primary');
        break;

      case 'contato':
        setNavContatoClass('text-sm border-b-3p border-primary');
        break;

      case 'sobre':
        setNavSobreClass('text-sm border-b-3p border-primary');
        break;
      default:
        break;
    }
  }

  function offHover(nav) {
    switch (nav) {
      case 'inicio':
        setNavInicioClass('text-sm ');
        break;
      case 'servicos':
        setNavServicosClass('text-sm ');
        break;

      case 'contato':
        setNavContatoClass('text-sm ');
        break;

      case 'sobre':
        setNavSobreClass('text-sm ');
        break;
      default:
        break;
    }
  }
  return (
    <header
      className="
        bg-bg_white

        h-auto
      ">
      <div className="
        grid grid-cols-2
     
        m-1
      ">

        <div
          id="logo-box"
          className="
            flex flex-row items-center
            h-full
            
          "
        >
          <div id="logo-img-box">
            <a href="https://ionecavalcanteengenharia.com.br">
              <img
                src={IoneCavalcanteEngenhariaLogo}
                alt="Ione-Cavalcante-Engenharia-logo-img"
                className="
                  h-auto
                  w-12
                  sm:w-12
                  md:w-12
                  lg:w-16
                  xl:w-16
                  
                "
                
              />

            </a>
          </div>
          <h1 id="logo-name-box ">
            <a href="https://ionecavalcanteengenharia.com.br">
              <img
                src={IoneCavalcanteEngenhariaLogoNameWithoutBackground}
                alt="Ione-Cavalcante-Engenharia-logo-name"
                className="
                  w-56
                  sm:w-56
                  md:w-56
                  lg:w-64
                  xl:w-64
                "
              />

            </a>
          </h1>
        </div>

        <nav
          className="
            flex flex-row items-center justify-around
            hidden
            sm:inline-flex
            md:inline-flex
            lg:inline-flex
            xl:inline-flex
          "
        >
          <NavLink 
            exact to="/" 
            className={navInicioClass} 

            onMouseEnter={() => onHover('inicio')} 
            onMouseOut={() => offHover('inicio')}
          
            activeStyle={{
              borderBottom: '3px solid #D49b7a',
            }}

            style={{outline: 0}}
          > Início</NavLink>
          <NavLink 
            to="/servicos"
            className={navServicosClass} 

            onMouseEnter={() => onHover('servicos')} 
            onMouseOut={() => offHover('servicos')}
          
            activeStyle={{
              borderBottom: '3px solid #D49b7a',
            }}

            style={{outline: 0}}
          >Serviços</NavLink>
          <NavLink 
            to="/contato" 
            className={navContatoClass} 

            onMouseEnter={() => onHover('contato')} 
            onMouseOut={() => offHover('contato')}
          

            activeStyle={{
              borderBottom: '3px solid #D49b7a',
            }}

            style={{outline: 0}}
          >Contato</NavLink>
          <NavLink 
            to="/sobre" 
            className={navSobreClass} 

            onMouseEnter={() => onHover('sobre')} 
            onMouseOut={() => offHover('sobre')}
          
            activeStyle={{
              borderBottom: '3px solid #D49b7a',
            }}

            style={{outline: 0}}
          >Sobre</NavLink>
        </nav>

      </div>

      <div
        id="header-bottom-bar"
        className="
          w-full bg-primary h-1
          sm:h-1
          md:h-1p
          lg:h-1p
          xl:h-1p
        "
      ></div>
    </header>
  );
};

export default Header;