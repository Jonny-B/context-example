import React, { useState } from 'react';
import { ThemeProvider } from './components/ThemeContext';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import './App.css';
import withRenderTime from './components/withRenderTime';

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const Content = () => {
    return (
      <>
        <Header onToggleTheme={toggleTheme} />
        <Body />
        <Footer />
      </>
    )
  }

  const RenderTimedContent = withRenderTime(Content)

  return (
    <ThemeProvider value={theme}>
      <RenderTimedContent />
    </ThemeProvider>
  );
}

export default App;
