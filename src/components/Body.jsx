import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

function Body() {
    const theme = useContext(ThemeContext);

    return (
        <div className={`body ${theme}`}>
            <div className="content content-1">
                <h2>Lorem Ipsum</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
            </div>
            <div className="content content-2">
                <h2>Lorem Ipsum</h2>
                <p>
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </div>
        </div>
    );
}

export default Body;
