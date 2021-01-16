import React from 'react';
import './Title.css';

export const  Title: React.FC = () => {
  return (
    <div id="title">
      <div className="title-caption">
        <span id="title-text-top">
          Hello! I am
        </span>
        <div className="line" />
      </div>
      <span id="title-middle">
        Benedict Tobias Wahyudi
      </span>
      <div className="title-caption">
        <div className="line" />
        <span id="title-text-bottom">
          Full Stack Software Developer
        </span>
      </div>
    </div>
  );
}

export default Title;
