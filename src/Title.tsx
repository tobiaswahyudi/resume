import React from 'react';
import './Title.css';

function Title() {
  return (
    <div id="title">
      <div className="title-caption">
        <span id="title-text-top">
          Hello! I am
        </span>
        <div className="line" />
      </div>
      <span id="title-middle">
        Tobias Wahyudi
      </span>
      <div className="title-caption">
        <div className="line" />
        <span id="title-text-bottom">
          Software Engineer Wizard-in-Training
        </span>
      </div>
    </div>
  );
}

export default Title;
