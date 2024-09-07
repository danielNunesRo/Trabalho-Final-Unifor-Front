import React from 'react';
import Button from './Button';
import './Navbar.css';

function Navbar() {
  const redirectToLogin = () => {
    window.location.href = '/login';
  }
  
  const redirectToRegistro = () => {
    window.location.href= '/registro'
  };

  return (
    <nav>
      <div className="center-nav">
        <p id="logo-nav">Tá gerando ?</p>
        <p id="Paragrafo">O Guia Definitivo das Melhores Festas da Cidade</p>
        <div className="buttons-nav">
          <Button onClick={redirectToLogin} text="Login" />
          <Button onClick={redirectToRegistro} text="Registro" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
