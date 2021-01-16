import { WorkCardProps } from './Work';

import Manulife from './res/img/manulife.png';
import SMS from './res/img/sms.png';
import GDP from './res/img/gdp.png';
import Fluent from './res/img/fluent.svg';


const WorkExperience: WorkCardProps[] = [
  {
    imgSrc: Manulife,
    title: "Software Developer Co-op, Manulife Bank",
    location: "Waterloo, Ontario",
    date: "Sep 2020 - Dec 2020",
    description: "Created in-house testing tools using Electron. Developed testing automation with Node and SoapUI. Worked with Spring Boot to develop microservice APIs.",
    backgroundColor: "#00BF66",
  },
  {
    imgSrc: SMS,
    title: "Software Engineer, Secret Mission Software",
    location: "Toronto, Ontario",
    date: "Jan 2020 - May 2020",
    description: "Delivered a responsive web-app using Typescript, React, Apollo, Graphene, and Django. Used Heroku and GitHub for a streamlined CI/CD pipeline.",
  },
  {
    imgSrc: GDP,
    title: "AI Engineer Intern, GDP Labs",
    location: "Jakarta, Indonesia",
    date: "May 2019 - Aug 2019",
    description: "Implemented recommendation systems using Knowledge Graph Embedding, which showed over 10% improvement over existing models.",
    backgroundColor: "#15A2D8",
  }
]

export const ProjectContent: WorkCardProps[] = [
  {
    imgSrc: Fluent,
    title: "Co-Founder/Frontend Developer, fluent.id",
    location: "Jakarta, Indonesia",
    date: "Jul 2019 - Dec 2019",
    description: "fluent.id is a platform which allows people to practice English via anonymous voice calls. Built using NextJS, Bulma, and Django, with peer-to-peer internet calling using PeerJS."
  }
]

export default WorkExperience;