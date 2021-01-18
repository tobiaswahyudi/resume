export interface AwardActivity {
  title: string,
  description?: string,
  href?: string
}

export const AwardsActivities: AwardActivity[] = [
  {
    title: "2018 Indonesian National Informatics Olympiad",
    description: "Achieved a national-level bronze medal in competitive programming."
  },
  {
    title: "Hack The North 2019",
    description: "Used React, Node, Express, and Firebase to build a social network web-app to connect people living in residence.",
    href: "https://devpost.com/software/goosenet-an-anonymous-community-for-your-apartment"
  },
  {
    title: "President, UWaterloo Indonesian Students Association"
    // description: "Managed and collaborated with a board of 6 to organize events for a group of over 80 active members."
  }
]