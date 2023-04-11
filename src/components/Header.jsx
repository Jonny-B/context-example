import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import usePortfolio from '../usePortfolio';

function Header({ onToggleTheme }) {
    const theme = useContext(ThemeContext);
    const PortfolioLink = usePortfolio();
    return (
        <header className={`header ${theme}`}>
            <nav>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li><PortfolioLink /></li>
                    <li>
                        <button className="theme-toggle" onClick={onToggleTheme}>
                            {theme === 'light' ? '🌙' : '☀️'}
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
