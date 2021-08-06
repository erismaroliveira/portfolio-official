import React from 'react';
import ContactItem from '../Components/ContactItem';
import Title from '../Components/Title';
import phone from '../img/phone.svg';
import email from '../img/emailme.svg';
import location from '../img/location.svg';

function ContactPage() {
  return (
    <div>
      <div className="title">
        <Title title={"Contato"} span={"Contato"} />
      </div>
      <div className="ContactPage">
      <div className="map-sect">
        <iframe title="Meu endereço" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d245795.96135380736!2d-48.077446394422765!3d-15.721386971424437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a3d18df9ae275%3A0x738470e469754a24!2zQnJhc8OtbGlhLCBERg!5e0!3m2!1spt-BR!2sbr!4v1628105827636!5m2!1spt-BR!2sbr" width="600" height="450" frameBorder="0" style={{border:0}} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
      </div>
      <div className="contact-sect">
        <ContactItem 
          icon={phone} 
          text={'+55 61 99442-8274'} 
          title={'Telefone'}
        />
        <ContactItem 
          icon={email} 
          text={'erismarpro@hotmail.com'}
          title={'Email'} 
        />
        <ContactItem 
          icon={location} 
          text={'cnb 46 bloco h loja 01'} 
          text2={'brasília - df'} 
          title={'Endereço'}
        />
      </div>
    </div>
    </div>
  )
}

export default ContactPage;
