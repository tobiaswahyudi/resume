import React from 'react';
import './Education.css';

import Loo from './res/img/loo.png';
import Shadow from './res/img/exportshadow_small.png';

export const Education = () => {
  return (
    <div id="education-section">
      <h2>Education</h2>
      <div id="education">
        <img className="shadow" src={Shadow} alt=""/>
        <img id="education-img" src={Loo} alt="The University of Waterloo. Major: Computer Science"/>
        <div id="education-content">
          <span id="education-title">University of Waterloo</span>
          <span id="education-description">Bachelor of Computer Science</span>
          <span id="education-date">Sep 2018 - Apr 2023 (Expected)</span>
          <span id="education-gpa">GPA: 3.66</span>
        </div>
      </div>
    </div>
  )
}

export default Education;