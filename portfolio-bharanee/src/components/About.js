import React from 'react';
import { Container, Typography, Paper, Box, Chip, Fade } from '@mui/material'; // Removed Grid, Added Fade

function About() {
  const skills = [
    "HTML", "CSS", "Node.js", "Express.js", "MySQL", "MongoDB", "React", "WebSocket"
  ];

  return (
    <Box component="section" id="about" sx={{ py: 5 }}>
      <Container maxWidth="lg">
        <Fade in={true} timeout={800}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h4" component="h2" gutterBottom>
              About Me
            </Typography>
            <Typography variant="body1" paragraph>
              Passionate computer science student with a strong
              foundation in programming and problem-solving.
              Eager to apply my skills in building efficient and
              scalable applications while learning and growing in a
              collaborative environment.
            </Typography>
            
            <Typography variant="subtitle1" color="text.secondary" sx={{ mt: 2 }}>
              Web Developer
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              RESTful API Developer
            </Typography>

            <Typography variant="h5" component="h3" gutterBottom sx={{ mt: 3 }}>
              Skills
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 1 }}>
              {skills.map((skill) => (
                <Chip label={skill} key={skill} />
              ))}
            </Box>
          </Paper>
        </Fade>
      </Container>
    </Box>
  );
}

export default About;
