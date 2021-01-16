import React from 'react';
import './Education.css';

import Loo from './res/img/loo.png';

export const Education = () => {
  return (
    <div>
      <h2>Education</h2>
      <div id="education">
        <img id="education-img" src={Loo} alt="The University of Waterloo. Major: Computer Science"/>
        <div id="education-content">
          <span id="education-title">University of Waterloo</span>
          <span id="education-description">Bachelor of Computer Science</span>
          <span id="education-date">Sep 2018 - Apr 2023 (Expected)</span>
        </div>
      </div>
    </div>
  )
}

export default Education;