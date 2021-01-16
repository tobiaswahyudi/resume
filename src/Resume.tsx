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
      <div id="header">
        <div className="left-column">
          <Title />
          <p id="summary">
            Significantly experienced in React development, and moderately skilled at Full-Stack engineering - including JS, Python, and Java backend libraries. Well-rounded with experience in leadership and design.
          </p>
        </div>
        <div className="right-column">
          <Contact />
        </div>
      </div>
      <div id="content">
        <div className="left-column">
          <Work />
        </div>
        <div className="right-column">
          <Education />
          <Skills />
          <Activities />
        </div>
      </div>
    </div>
  );
}

export default Resume;
