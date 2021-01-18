import React from 'react';
import './Work.css';

import Shadow from './res/img/exportshadow.png';

import { WorkExperience, ProjectContent, WorkCardProps } from './WorkContent';

export const WorkCard: React.FC<WorkCardProps> = ({ href, imgSrc, backgroundColor, title, company, location, date, description, chips = [] }: WorkCardProps) => {

  const Inner = () => (
    <>
      <img className="shadow" src={Shadow} alt="" />
      <img className="work-card-img" src={imgSrc} alt="" />
      <div className="work-card-content">
        <span className="work-card-title">{title}</span>
        <span className="work-card-company">{company}</span>
        <div className="gray-line" />
        <div className="location-date">
          <span className="location">
            {location}
          </span>
          <span className="date">
            {date}
          </span>
        </div>
        <ul className="work-card-description">
          {description.map(desc => <li>{desc}</li>)}
        </ul>
        <div className="chips-container">
          {chips.map(chip => (
            <div className="frontend chip"
              style={{
                background: `linear-gradient(105.73deg, hsl(${chip.hue}, 95%, 93%) 6.81%, hsl(${chip.hue}, 100%, 84%) 85.14%)`,
                color: `hsl(${chip.hue}, 50%, 30%)`,
              }}
            ><span>{chip.text}</span></div>)
          )}
        </div>
      </div>
    </>
  )
  return href ? (
    <a className="work-card" style={{ background: backgroundColor }} href={href}>
      <Inner />
    </a>
  ) : (
    <div className="work-card" style={{ background: backgroundColor }}>
      <Inner />
    </div>
  )
}

export const Work: React.FC = () => {
  return (
    <div id="work-experience">
      <h2>Work Experience</h2>
      {WorkExperience.map(exp => <WorkCard {...exp} />)}
      <h2 style={{ marginTop: "5px" }}>Projects</h2>
      {ProjectContent.map(exp => <WorkCard {...exp} />)}
    </div>
  )
}