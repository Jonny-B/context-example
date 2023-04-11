import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

function Header({ onToggleTheme }) {
    const theme = useContext(ThemeContext);

    return (
        <header className={`header ${theme}`}>
            <nav>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
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
