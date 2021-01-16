import React from 'react';
import './Contact.css';

import mailIcon from './res/img/mail.svg';
import webIcon from './res/img/web.svg';
import linkedinIcon from './res/img/linkedin.svg';
import locIcon from './res/img/loc.svg';
import gitIcon from './res/img/git.svg';
import phoneIcon from './res/img/phone.svg';

interface ContactRowProps {
  imgSrc: string,
  imgAlt: string,
  children: string,
  linkTo?: string
}

export const ContactRow: React.FC<ContactRowProps> = ({ imgSrc, children, linkTo, imgAlt }: ContactRowProps) => {
  console.log(mailIcon);
  return (
    <div className="contact-row">
      <img src={imgSrc} className="contact-img" alt={imgAlt} />
      {
        linkTo ?
          <a href={linkTo} className="contact-text">{children}</a> :
          <span className="contact-text">{children}</span>
      }
    </div>
  )
}

export const Contact: React.FC = () => {
  return (
    <div id="contact">
      <ContactRow imgSrc={mailIcon} imgAlt="Email address" linkTo="mailto:tobiaswahyudi@gmail.com">
        tobiaswahyudi@gmail.com
      </ContactRow>
      <ContactRow imgSrc={webIcon} imgAlt="Web address" linkTo="https://toby.wahyudi.ca">
        https://toby.wahyudi.ca
      </ContactRow>
      <ContactRow imgSrc={linkedinIcon} imgAlt="LinkedIn profile" linkTo="https://www.linkedin.com/in/tobias-wahyudi/">
        /in/tobias-wahyudi/
      </ContactRow>
      <ContactRow imgSrc={locIcon} imgAlt="Based in">
        Toronto, Ontario
      </ContactRow>
      <ContactRow imgSrc={gitIcon} imgAlt="GitHub address" linkTo="https://github.com/tobiaswahyudi">
        /tobiaswahyudi
      </ContactRow>
      <ContactRow imgSrc={phoneIcon} imgAlt="Personal phone number">
        (519) 781-9405
      </ContactRow>
    </div>
  );
}

export default Contact;
