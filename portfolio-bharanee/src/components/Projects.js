import React from 'react';
import { Container, Typography, Box, Grid, Card, CardContent, CardActions, Button, Link, Fade } from '@mui/material'; // Added Fade

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
  // Add more projects here if needed
];

function Projects() {
  return (
    <Box component="section" id="projects" sx={{ py: 5 }}>
      <Container maxWidth="lg">
        <Fade in={true} timeout={800}> 
          {/* Wrap the main content of the section */}
          <Box> 
            <Typography variant="h4" component="h2" gutterBottom align="center">
              Projects
            </Typography>
            <Grid container spacing={3}>
              {projectsData.map((project, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Card sx={{ 
                    height: '100%', 
                    display: 'flex', 
                    flexDirection: 'column',
                    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out', // Add transition property
                    '&:hover': {
                      transform: 'scale(1.03)', // Slightly scale up
                      boxShadow: (theme) => theme.shadows[6], // Increase shadow
                    }
                  }}>
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography variant="h5" component="h3" gutterBottom>
                        {project.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                        <strong>Technologies:</strong> {project.technologies}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                        <strong>Role:</strong> {project.role}
                      </Typography>
                      {project.description.map((desc, i) => (
                        <Typography key={i} variant="body2" paragraph>
                          {desc}
                        </Typography>
                      ))}
                    </CardContent>
                    <CardActions>
                      {project.liveLink && (
                        <Button 
                          component={Link} 
                          href={project.liveLink} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          size="small"
                        >
                          View Live
                        </Button>
                      )}
                      {/* Repository link can be added here if provided later */}
                      {/* Example:
                      <Button component={Link} href={project.repoLink} target="_blank" rel="noopener noreferrer" size="small">
                        View Code
                      </Button>
                      */}
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Fade>
      </Container>
    </Box>
  );
}

export default Projects;
