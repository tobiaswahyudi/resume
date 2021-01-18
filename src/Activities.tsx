import React from 'react';
import './Activities.css';
import { AwardActivity as AwardActivityType, AwardsActivities } from './ActivitiesContent';



const AwardActivity: React.FC<AwardActivityType> = ({ href, title, description }: AwardActivityType) => {
  console.log(href)
  return href ? (
    <a className="award-activity" href={href}>
      <span className="award-activity-title">{title}</span>
      {description && <span className="award-activity-description">{description}</span>}
    </a>
  ) : (
    <div className="award-activity">
      <span className="award-activity-title">{title}</span>
      {description && <span className="award-activity-description">{description}</span>}
    </div>
  )
}

export const Activities = () => {
  return (
    <div id="activities-section">
      <h2>{"Awards & Activities"}</h2>
      <div id="activities-content">
        {AwardsActivities.map(aa => (
          <AwardActivity title={aa.title} description={aa.description} href={aa.href}/>
        ))}
      </div>
    </div>
  )
}