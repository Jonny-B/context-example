import React, { useState } from 'react';
import { ThemeProvider } from './components/ThemeContext';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeProvider value={theme}>
      <Header onToggleTheme={toggleTheme} />
      <Body />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
