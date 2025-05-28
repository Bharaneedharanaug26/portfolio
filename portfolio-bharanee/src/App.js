import React, { useContext } from 'react';
import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProviderContext, ThemeContext } from './theme/ThemeContext';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function AppContent() {
  const { mode } = useContext(ThemeContext);

  const muiTheme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: mode,
        },
      }),
    [mode]
  );

  return (
    <MuiThemeProvider theme={muiTheme}>
      <CssBaseline />
      <div> {/* Removed className="App" */}
        <Header />
        <main>
          <About />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </MuiThemeProvider>
  );
}

function App() {
  return (
    <ThemeProviderContext>
      <AppContent />
    </ThemeProviderContext>
  );
}

export default App;
