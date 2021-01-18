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
  company: string,
  location: string,
  date: string,
  description: string[],
  chips?: Chip[]
}

export const WorkExperience: WorkCardProps[] = [
  {
    imgSrc: Manulife,
    title: "Software Developer Co-op",
    company: "Manulife Bank of Canada",
    location: "Waterloo, Canada",
    date: "Sep 2020 - Dec 2020",
    description: [
      "Implemented and configured analytics microservice APIs for Bill Payment Reminders, projected to reach over 10,000 mobile app users.",
      "Independently created in-house testing and automation tools, reducing manual testing time by over 50%.",
      "Contributed to Manulife's internal React components library."
    ],
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
    title: "Software Engineer Co-op",
    company: "Secret Mission Software",
    location: "Toronto, Canada",
    date: "Jan 2020 - May 2020",
    description: [
      "Developed responsive web-apps for multiple clients, including a platform used by more than 4,500 real estate brokers in Toronto.",
      "Implemented a GraphQL backend with Graphene and Django.",
    ],
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
    title: "AI Engineer Intern",
    company: "GDP Labs",
    location: "Jakarta, Indonesia",
    date: "May 2019 - Aug 2019",
    description: [
      "Researched and implemented recommendation systems using Knowledge Graph Embedding, which showed over 10% improvement over existing Collaborative Filtering models."
    ],
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
    title: "Co-Founder/Frontend Developer",
    company: "fluent.id",
    location: "Jakarta, Indonesia",
    date: "Jul 2019 - Dec 2019",
    description: [
      "Designed and implemented an anonymous platform connecting users to practice English via peer-to-peer-voice calls, reaching 70+ users during launch with 6 reporting significant language improvement.",
      "Implemented peer-to-peer real-time communication and voice calls using PeerJS."
    ],
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