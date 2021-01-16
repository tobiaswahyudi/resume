import React from 'react';
import './Activities.css';
import { AwardActivity as AwardActivityType, AwardsActivities } from './ActivitiesContent';



const AwardActivity: React.FC<AwardActivityType> = ({title, description}: AwardActivityType) => {
  return (
    <div className="award-activity">
      <span className="award-activity-title">{title}</span>
      <span className="award-activity-description">{description}</span>
    </div>
  )
}

export const Activities = () => {
  return (
    <div id="activities-section">
      <h2>{"Awards & Activities"}</h2>
      <div id="activities-content">
        {AwardsActivities.map(aa => (
          <AwardActivity title={aa.title} description={aa.description} />
        ))}
      </div>
    </div>
  )
}