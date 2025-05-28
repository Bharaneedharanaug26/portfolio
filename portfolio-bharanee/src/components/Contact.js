import React from 'react';
import { Container, Typography, Box, List, ListItem, ListItemIcon, ListItemText, Link, Fade } from '@mui/material'; // Added Fade
import { Phone, Email, LinkedIn, GitHub, Code as LeetCodeIcon } from '@mui/icons-material'; // Renamed Code to LeetCodeIcon

const contactItems = [
  {
    icon: <Phone />,
    primary: "Phone",
    secondaryLink: "tel:9080274778",
    secondaryText: "9080274778",
  },
  {
    icon: <Email />,
    primary: "Email (Personal)",
    secondaryLink: "mailto:bharaneedharan2004@gmail.com",
    secondaryText: "bharaneedharan2004@gmail.com",
  },
  {
    icon: <Email />,
    primary: "Email (Academic)",
    secondaryLink: "mailto:bharaneedharan.cb22@bitsathy.ac.in",
    secondaryText: "bharaneedharan.cb22@bitsathy.ac.in",
  },
  {
    icon: <LinkedIn />,
    primary: "LinkedIn",
    secondaryLink: "https://linkedin.com/in/Bharaneedharan-K",
    secondaryText: "linkedin.com/in/Bharaneedharan-K",
    targetBlank: true,
  },
  {
    icon: <GitHub />,
    primary: "GitHub",
    secondaryLink: "https://github.com/Bharaneedharan-K",
    secondaryText: "github.com/Bharaneedharan-K",
    targetBlank: true,
  },
  {
    icon: <LeetCodeIcon />,
    primary: "LeetCode",
    secondaryLink: "https://leetcode.com/Bharaneedharan-K",
    secondaryText: "leetcode.com/Bharaneedharan-K",
    targetBlank: true,
  },
];

function Contact() {
  return (
    <Box component="section" id="contact" sx={{ py: 5 }}>
      <Container maxWidth="md">
        <Fade in={true} timeout={800}>
          {/* Wrap the main content of the section */}
          <Box>
            <Typography variant="h4" component="h2" gutterBottom align="center">
              Contact
            </Typography>
            <List>
              {contactItems.map((item, index) => (
                <ListItem key={index} disablePadding sx={{ mb: 1.5 }}> {/* Added some margin bottom */}
                  <ListItemIcon>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={item.primary}
                    secondary={
                      <Link 
                        href={item.secondaryLink} 
                        target={item.targetBlank ? "_blank" : undefined} 
                        rel={item.targetBlank ? "noopener noreferrer" : undefined}
                        color="inherit" // To ensure link color adapts to theme
                      >
                        {item.secondaryText}
                      </Link>
                    }
                  />
                </ListItem>
              ))}
            </List>
          </Box>
        </Fade>
      </Container>
    </Box>
  );
}

export default Contact;
