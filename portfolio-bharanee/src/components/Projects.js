import React from 'react';

const projectsData = [
  {
    title: "BINFN - Code Snippet Sharing Website",
    technologies: "Express, Nodejs, MongoDb, React",
    role: "Backend Developer",
    description: [
      "Built a Code Snippet Sharing Platform that lets users post, view, and manage code snippets with syntax highlighting and real-time updates.",
      "Developed secure user authentication with JWT, used MongoDB for data storage, and deployed the frontend on Vercel and backend on Render for a smooth and scalable user experience."
    ],
    liveLink: "https://binfn.vercel.app"
  },
  {
    title: "Tic-Tac-Toe Multiplayer using WebSocket",
    technologies: "WebSocket, Express, Nodejs, React",
    role: "Frontend and Backend Developer",
    description: [
      "Built a real-time multiplayer Tic-Tac-Toe game using React, Express.js, and Socket.io, enabling users to create or join rooms and play interactively.",
      "Implemented two-way communication with WebSockets for real-time game state updates and seamless player interactions."
    ],
    liveLink: "https://tic-tac-toe-multiplayers.vercel.app"
  }
];

function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>
      {projectsData.map((project, index) => (
        <div key={index} className="project-card">
          <h3>{project.title}</h3>
          <p><strong>Technologies:</strong> {project.technologies}</p>
          <p><strong>Role:</strong> {project.role}</p>
          {project.description.map((desc, i) => (
            <p key={i}>{desc}</p>
          ))}
          {project.liveLink && (
            <p><a href={project.liveLink} target="_blank" rel="noopener noreferrer">View Live</a></p>
          )}
          {/* Repository link can be added here if provided later */}
        </div>
      ))}
    </section>
  );
}

export default Projects;
