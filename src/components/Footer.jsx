import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import usePortfolio from '../usePortfolio';

function Footer() {
  const theme = useContext(ThemeContext);
  const GalaxySim = usePortfolio('galaxy');
  const BlastOff = usePortfolio('blast-off');
  return (
    <footer className={`footer ${theme}`}>
      <p>See My Apps</p>
      <ul>
        <li><GalaxySim /></li>
        <li><BlastOff /></li>
      </ul>
    </footer>
  );
}

export default Footer;
