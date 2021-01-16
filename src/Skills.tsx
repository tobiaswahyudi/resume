import React from 'react';
import './Skills.css';

export const Skills = () => {
  return (
    <div id="skills-section">
      <h2>Skills</h2>
      {/* <h3>Languages</h3>
      <ul>
        <li>JavaScript/TypeScript</li>
        <li>C/C++</li>
        <li>Java/Scala</li>
        <li>Python</li>
        <li>HTML/CSS</li>
        <li>Rust</li>
      </ul> */}
      <h3>Frameworks</h3>
      <ul>
        <li>React<span> - Next / Gatsby / Expo</span></li>
        <li>Angular<span> + RxJS</span></li>
        <li>Django<span> - DRF / Graphene</span></li>
        <li>Node<span> + Express</span></li>
        <li>Spring Framework</li>
      </ul>
      <h3>{"Tools & Technologies"}</h3>
      <ul>
        <li>Figma</li>
        <li>Storybook</li>
        <li>Firebase</li>
        <li>REST/GraphQL</li>
        <li>Heroku</li>
        <li>Linux/Unix</li>
        <li>Git</li>
      </ul>
    </div>
  );
}

export default Skills;