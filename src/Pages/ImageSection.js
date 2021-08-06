import React from 'react';
import about from '../img/perfil.jpeg';
import javascript from '../img/javascript.svg';
import typescript from '../img/typescript.svg';

function ImageSection() {
  return (
    <div className="ImageSection">
      <div className="img">
        <img src={about} alt="" />
      </div>
      <div className="about-info">
        <h4>Eu Sou<span> Erismar Oliveira</span></h4>
        <p className="about-text">
         Programador, CEO do Diário da Tecnologia e um grande amante de Tecnologia,
         Programação, Livros e Séries ⚡
        </p>
        <div className="about-details">
          <div className="left-section">
            <p><img src={javascript} alt="" /></p>
            <p>💛</p>
          </div>
          <div className="right-section">
            <p><img src={typescript} alt="" /></p>
            <p>💙</p>
          </div>
        </div>
        <button className="btn">Download Cv</button>
      </div>
    </div>
  )
}

export default ImageSection;
