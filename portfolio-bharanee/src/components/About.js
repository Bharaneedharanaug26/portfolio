import React from 'react';

function About() {
  return (
    <section id="about">
      <h2>About Me</h2>
      <p>
        Passionate computer science student with a strong
        foundation in programming and problem-solving.
        Eager to apply my skills in building efficient and
        scalable applications while learning and growing in a
        collaborative environment.
      </p>
      <h3>Skills</h3>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>Node.js</li>
        <li>Express.js</li>
        <li>MySQL</li>
        <li>MongoDB</li>
        <li>React</li> {/* Added from project descriptions */}
        <li>WebSocket</li> {/* Added from project descriptions */}
      </ul>
      <p>Web Developer</p>
      <p>RESTful API Developer</p>
    </section>
  );
}

export default About;
