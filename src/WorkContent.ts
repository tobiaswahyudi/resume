import Manulife from './res/img/manulife.svg';
import SMS from './res/img/sms.svg';
import GDP from './res/img/gdp.svg';
import Fluent from './res/img/fluent.svg';

export interface Chip {
  hue: number,
  text: string
}

export interface WorkCardProps {
  imgSrc: string,
  backgroundColor?: string,
  title: string,
  location: string,
  date: string,
  description: string,
  chips?: Chip[]
}

export const WorkExperience: WorkCardProps[] = [
  {
    imgSrc: Manulife,
    title: "Software Developer Co-op, Manulife Bank",
    location: "Waterloo, Ontario",
    date: "Sep 2020 - Dec 2020",
    description: "Developed and configured analytics microservices in Spring Boot, projected to reach over 10,000 mobile app users. Created in-house testing and automation tools using Electron, Node and SoapUI.",
    backgroundColor: "#00BF66",
    chips: [
      { hue: 137, text: "SPRING" },
      { hue: 187, text: "REACT" },
      { hue: 187, text: "ELECTRON" },
      { hue: 115, text: "NODE" },
      { hue: 346, text: "STORYBOOK" }
    ]
  },
  {
    imgSrc: SMS,
    title: "Software Engineer, Secret Mission Software",
    location: "Toronto, Ontario",
    date: "Jan 2020 - May 2020",
    description: "Developed responsive web-apps using React, Gatsby, and Apollo. Implemented a GraphQL backend with Graphene and Django. Deployed on a CI/CD pipeline using Heroku and GitHub.",
    chips: [
      { hue: 187, text: "REACT" },
      { hue: 216, text: "APOLLO" },
      { hue: 86, text: "DJANGO" },
      { hue: 30, text: "GRAPHENE" },
      { hue: 256, text: "GATSBY" },
      { hue: 256, text: "BOOTSTRAP" },
      { hue: 346, text: "STORYBOOK" },
      { hue: 256, text: "HEROKU" },
      { hue: 216, text: "TYPESCRIPT" },
    ]
  },
  {
    imgSrc: GDP,
    title: "AI Engineer Intern, GDP Labs",
    location: "Jakarta, Indonesia",
    date: "May 2019 - Aug 2019",
    description: "Researched and implemented recommendation systems using Knowledge Graph Embedding, which showed over 10% improvement over existing Collaborative Filtering models.",
    backgroundColor: "#15A2D8",
    chips: [
      { hue: 30, text: "TENSORFLOW" },
      { hue: 187, text: "NUMPY" },
      { hue: 216, text: "SPARQL" },
    ]
  }
]

export const ProjectContent: WorkCardProps[] = [
  {
    imgSrc: Fluent,
    title: "Co-Founder/Frontend Developer, fluent.id",
    location: "Jakarta, Indonesia",
    date: "Jul 2019 - Dec 2019",
    description: "Designed and developed fluent.id: a platform enabling people to practice English via free anonymous voice calls, reaching almost 100 users at launch. Implemented peer-to-peer real-time communication and voice calls using PeerJS.",
    chips: [
      { hue: 187, text: "REACT" },
      { hue: 187, text: "NEXTJS" },
      { hue: 162, text: "BULMA" },
      { hue: 86, text: "DJANGO" },
      { hue: 0, text: "PEERJS" },
    ]
  }
]

export default WorkExperience;