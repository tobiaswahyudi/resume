import React from 'react';
import './Resume.css';
import Title from './Title';

export const  Resume: React.FC = () => {
  return (
    <div id="page">
      <div id="header">
        <div className="left-column">
          <Title />
          <p id="summary">
            Third-year CS at the University of Waterloo. Significantly experienced in React development, and moderately skilled at Full-Stack engineering - including JS, Python, and Java backend libraries. Familiar in working with CI/CD and Agile workspaces.
          </p>
        </div>
        <div className="right-column">
          x
        </div>
      </div>
    </div>
  );
}

export default Resume;
