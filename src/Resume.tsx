import React from 'react';
import { Activities } from './Activities';
import Contact from './Contact';
import Education from './Education';
import './Resume.css';
import Skills from './Skills';
import Title from './Title';
import { Work } from './Work';

export const Resume: React.FC = () => {
  return (
    <div id="page">
        <div className="left-column">
          <Title />
          <Work />
        </div>
        <div className="right-column">
          <Contact />
          <Education />
          <Skills />
          <Activities />
        </div>
    </div>
  );
}

export default Resume;
