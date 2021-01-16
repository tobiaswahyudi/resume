import React from 'react';
import './Work.css';

import WorkExperience, { ProjectContent } from './WorkContent';

export interface WorkCardProps {
  imgSrc: string,
  backgroundColor?: string,
  title: string,
  location: string,
  date: string,
  description: string
}

export const WorkCard: React.FC<WorkCardProps> = ({ imgSrc, backgroundColor, title, location, date, description }: WorkCardProps) => {
  return (
    <div className="work-card" style={{ background: backgroundColor }}>
      <img className="work-card-img" src={imgSrc} alt="" />
      <div className="work-card-content">
        <span className="work-card-title">{title}</span>
        <div className="gray-line" />
        <div className="location-date">
          <span className="location">
            {location}
          </span>
          <span className="date">
            {date}
          </span>
        </div>
        <p className="work-card-description">
          {description}
        </p>
      </div>
    </div>
  )
}

export const Work: React.FC = () => {
  return (
    <div id="work-experience">
      <h2>Work Experience</h2>
      {WorkExperience.map(exp => <WorkCard {...exp} />)}
      <h2>Projects</h2>
      {ProjectContent.map(exp => <WorkCard {...exp} />)}
    </div>
  )
}