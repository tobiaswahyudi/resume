import React from 'react';
import './Work.css';

import Manulife from './res/img/manulife.png';
import SMS from './res/img/sms.png';
import GDP from './res/img/gdp.png';

interface WorkCardProps {
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

const WorkExperience: WorkCardProps[] = [
  {
    imgSrc: Manulife,
    title: "Software Developer Co-op, Manulife Bank",
    location: "Waterloo, Ontario",
    date: "Sep 2020 - Dec 2020",
    description: "Created in-house testing tools using Electron. Developed testing automation with Node and SoapUI. Worked with Spring Boot to develop microservice APIs.",
    backgroundColor: "#00BF66"
  },
  {
    imgSrc: SMS,
    title: "Software Engineer, Secret Mission Software",
    location: "Toronto, Ontario",
    date: "Jan 2020 - May 2020",
    description: "Delivered a responsive web-app using Typescript, React, Apollo, Graphene, and Django. Used Heroku and GitHub for a streamlined CI/CD pipeline."
  },
  {
    imgSrc: GDP,
    title: "AI Engineer Intern, GDP Labs",
    location: "Jakarta, Indonesia",
    date: "May 2019 - Aug 2019",
    description: "Implemented recommendation systems using Knowledge Graph Embedding, which showed over 10% improvement over existing models.",
    backgroundColor: "#15A2D8"
  }
]

export const Work: React.FC = () => {
  return (
    <div id="work-experience">
      <h2>Work Experience</h2>
      {WorkExperience.map(exp => <WorkCard {...exp} />)}
    </div>
  )
}