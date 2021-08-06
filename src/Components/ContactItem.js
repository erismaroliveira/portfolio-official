import React from 'react';

function ContactItem({icon,text,text2,title}) {
  return (
    <div className="ContactItem">
      <div className="contact">
        <img src={icon} alt="" />
        <div className="right-items">
          <h6>{title}</h6>
          <p>{text}</p>
          <p>{text2}</p>
        </div>
      </div>
    </div>
  )
}

export default ContactItem;
