import React from 'react';
import { Box, Container, Typography } from '@mui/material'; // Removed Link

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 3, // padding top and bottom
        px: 2, // padding left and right
        mt: 'auto', // push footer to the bottom
        backgroundColor: (theme) =>
          theme.palette.mode === 'light'
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
        textAlign: 'center',
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="body2" color="text.secondary">
          &copy; {new Date().getFullYear()} Bharaneedharan K
        </Typography>
        {/* Optional: Add social media links here */}
        {/* Example:
        <Link color="inherit" href="https://www.linkedin.com/" sx={{ ml: 1, mr: 1 }}>
          LinkedIn
        </Link>
        <Link color="inherit" href="https://github.com/">
          GitHub
        </Link>
        */}
      </Container>
    </Box>
  );
}

export default Footer;
