import React, { useContext } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import { ThemeContext } from '../theme/ThemeContext';

function Header() {
  const { mode, toggleTheme } = useContext(ThemeContext);

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Bharaneedharan K
        </Typography>
        <Button color="inherit" onClick={toggleTheme}>
          Toggle Theme
        </Button>
        <IconButton 
          sx={{ ml: 1 }} 
          onClick={toggleTheme} 
          color="inherit"
          aria-label={mode === 'dark' ? "switch to light mode" : "switch to dark mode"} // Added aria-label
        >
          {mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
