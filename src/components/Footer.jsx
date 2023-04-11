import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

function Footer() {
  const theme = useContext(ThemeContext);

  return (
    <footer className={`footer ${theme}`}>
      <p>© 2023 MyCompany</p>
    </footer>
  );
}

export default Footer;
