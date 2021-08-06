import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { init } from 'ityped';

function HomePage() {

  const textRef = useRef(null);
  console.log(textRef);

  useEffect(() => {
    if (!textRef.current) {
      return;
    }
    init(textRef.current, { 
      showCursor: true,
      backSpeed: 60, 
      backDelay: 1500,
      strings: ['Front-End.'] 
    })
  }, []);

 

  return (
    <div className="HomePage">
      <header className="hero">
        <h2 className="hero-text">
          Olá, Eu Sou <span>Erismar Oliveira</span>
        </h2>
        <h3 className="hero-text">
          Desenvolvedor <span ref={textRef}></span>
        </h3>
        <p className="h-sub-text">
          Minha ambição sempre foi poder realizar os sonhos.
          Se você mostrar os problemas às pessoas, e indicar uma solução, elas vão se mobilizar para agir.
        </p>
        <div className="icons">
          <Link className="icon-holder">
            <FontAwesomeIcon icon={faInstagram} className="icon ig" />
          </Link>
          <Link className="icon-holder">
            <FontAwesomeIcon icon={faGithub} className="icon gh" />
          </Link>
          <Link className="icon-holder">
            <FontAwesomeIcon icon={faYoutube} className="icon yt" />
          </Link>
        </div>
      </header>
    </div>
  )
}

export default HomePage;
